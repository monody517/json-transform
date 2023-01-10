import {Entity} from "./entity";


export type PropertyType = "object" | "array" | "boolean" | "string" | "number" | "null";

export const isArrayProperty = (val: Property): val is ArrayProperty => val.type === "array";
export const isObjectProperty = (val: Property): val is ObjectProperty => val.type === "object";

export type Property = NormalProperty | ObjectProperty | ArrayProperty

export interface NormalProperty {
  type: PropertyType,
  key:string;
  value:any;
}

export interface RootProperty extends NormalProperty {
  properties: Property[];
}

/**
 * 对象属性
 */
export interface ObjectProperty extends NormalProperty {
  properties: Property[];
  // 当前对象所对应的实体
  entity: Entity;
}

/**
 * 数组属性
 */
export interface ArrayProperty extends NormalProperty {
  childProperty: ArrayChildProperty;
}

export type ArrayChildProperty = NormalProperty | ObjectProperty;
