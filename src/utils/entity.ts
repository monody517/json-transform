import {
  ArrayChildProperty,
  ArrayProperty,
  ObjectProperty,
  Property,
  PropertyType,
  RootProperty
} from "../types/property";
import {getPropertyType} from "./shared";

/**
 * json数据结构转化
 * @param target json数据的object格式
 */
export const parseJsonToProperty = (target: Record<any,any>): RootProperty => {
  return {
    key: "root",
    type: 'object',
    value: target,
    properties: Object.keys(target).map(key=>{
      const value = target[key]
      const type = getPropertyType(value)
      if(type === 'object'){
        return {
          key,
          type,
          value,
          properties: parseJsonToProperty(value).properties
        }
      }
      if(type === 'array'){
        return handleArrayType({key,value})
      }

      return {
        key,
        type,
        value
      }
    })
  }
}

function handleArrayType({key,value}:{key:string,value:any}): ArrayProperty {
  const childrenTypes = new Set(value.map((item:any)=>getPropertyType(item)))  // 使用Set检查数组中的类型，当类型数大于1时，直接返回
  const childType = [...childrenTypes][0] as PropertyType;
  let childProperty: ArrayChildProperty = {
    key,
    value: "",
    type: "null",
  }

  if(childrenTypes.size !== 1){   // 存在多个类型，或者没有数据，做any处理
    childProperty.type = 'null'
  }else if(childType === 'object'){   // 只有一个类型，并且为object
    childProperty.type = 'object'
    let properties: Property[]
    if(value.length === 1){   // 子元素只有一个，直接设置childProperty
      childProperty.value = value[0];
      properties = parseJsonToProperty(value[0]).properties
    }else{    // 子元素有多个，合并所有属性
      const mergeObject = value.reduce((pre:Record<any, any>,item:Record<any, any>)=> Object.assign(pre,item),{})
      childProperty.value = mergeObject
      properties = parseJsonToProperty(mergeObject).properties
    }
    (<ObjectProperty>childProperty).properties = properties
  } else {
    // 其他类型不作处理
    childProperty.type = childType;
  }

  return {
    key,
    type: 'array',
    value,
    childProperty
  }
}
