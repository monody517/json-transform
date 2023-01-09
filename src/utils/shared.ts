import {PropertyType} from "../types/property";

export const isObject = (val: unknown): val is Record<any,any> => val !== null && typeof val === "object";
export const isNull = (val: unknown): val is null => Object.prototype.toString.call(val).includes("Null")
export const isArray = Array.isArray;

export const getPropertyType = (val:unknown): PropertyType => {
  if(isArray(val)){
    return "array"
  }
  if(isNull(val)){
    return "null"
  }

  return typeof val as PropertyType
}
