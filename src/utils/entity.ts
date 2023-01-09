import {RootProperty} from "../types/property";
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

      return {
        key,
        type,
        value
      }
    })
  }
}
