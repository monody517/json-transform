import {isNull, isObject} from "./shared";
import {parseJsonToProperty} from "./entity";
import {Entity} from "../types/entity";
import {isArrayProperty, isObjectProperty, ObjectProperty, Property, RootProperty} from "../types/property";
import {Options, TransformCode} from "../types/transform";
import {formatKey} from "./keyTransform";

const parseJsonToObject = (jsonCode: string): Record<any, any> => {
  let result = {};
  try{
    result = JSON.parse(jsonCode)
  }catch (e) {
    throw Error("parse code error ==>" + e);
  }
  return result
}

/**
 * 递归处理所有实体类，entity就是最终返回的数组item
 * @param property
 * @param modelEntityList
 */
const _traverseProperty = (property: RootProperty,modelEntityList:Entity[]): Entity => {

  const appendEntity = (itemProperty:ObjectProperty) => { // 给对象类型的元素添加entity自身描述
    itemProperty.entity = _traverseProperty(itemProperty,modelEntityList)  // 给为object的字段递归添加entity
    modelEntityList.push(itemProperty.entity)   // 将object的字段实体类放在最终返回的数组
  }

  property.properties?.forEach((item: Property) => {
    if (isObjectProperty(item)) {
      appendEntity(item);
    } else if (isArrayProperty(item)) {
      const childProperty = item.childProperty;
      if (isObjectProperty(childProperty)) {
        appendEntity(childProperty);
      }
    }
  });

  console.log('property',property);

  const {key,type,properties} = property
  return {
    key,
    type,
    properties,
    parent:{key,type}
  }
}

/**
 * 处理传入的json数据，转化为可用的对象
 * @param jsonCode
 */
export const parse = (jsonCode: object): Entity[] => {
  if(isNull(jsonCode)){
    throw Error("The Value cannot be null.");
  }

  let target;
  try{
    target = isObject(jsonCode) ? jsonCode : parseJsonToObject(jsonCode);
  }catch (e){
    throw Error("parse json to object error;" + e);
  }

  let rootProperty;
  try{
    rootProperty = parseJsonToProperty(target)
  }catch (e){
    throw Error("parse json to property error;" + e);
  }

  const modelEntityList:Entity[] = []
  let root;
  try{
    root = _traverseProperty(rootProperty,modelEntityList)
  }catch (e) {
    throw Error("traverse property error;" + e);
  }
  modelEntityList.unshift(root);  // 将最大的root对象放在返回数组的第一个

  return modelEntityList  // 返回的是每一个object的实体类（key,type,properties,parent）
}

/**
 * 转化函数
 * @param list
 * @param options
 */
export const transformCode: TransformCode = (list:Entity[],options:Options) => {
  let code = ''

  list.forEach(entity=>{
    code += options.before?.({entity})
    entity.properties.forEach(property=>{
      const fn = options[property.type];
      if(!fn){
        code += options.default?.({property,entity})
        return
      }
      if(isObjectProperty(property)){
        code += options.object?.({property,entity})
      }
      if(isArrayProperty(property)){
        code += options.array?.({property: property as any,entity})
      }
    })
    code += options.after?.({entity})
  })
  return code
}
