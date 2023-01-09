import {RootProperty} from "../types/property";
import {getPropertyType} from "./shared";


export const parseJsonToProperty = (target: Record<any,any>): RootProperty => {
  return {
    key: "root",
    type: 'object',
    value: target,
    properties: Object.keys(target).map(key=>{
      const value = target[key]
      const type = getPropertyType(value)
      // if(type)

      return {
        key,
        type,
        value
      }
    })
  }
}
