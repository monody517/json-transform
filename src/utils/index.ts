import {isNull, isObject} from "./shared";
import {parseJsonToProperty} from "./entity";
import {Entity} from "../types/entity";
import {isArrayProperty, isObjectProperty, ObjectProperty, Property, RootProperty} from "../types/property";

const parseJsonToObject = (jsonCode: string): Record<any, any> => {
  let result = {};
  try{
    result = JSON.parse(jsonCode)
  }catch (e) {
    throw Error("parse code error ==>" + e);
  }
  return result
}

const _traverseProperty = (property: RootProperty,modelEntityList:Entity[]): Entity => {

  const appendEntity = (itemProperty:ObjectProperty) => {
    itemProperty.entity = _traverseProperty(itemProperty,modelEntityList)
    modelEntityList.push(itemProperty.entity)
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

  const {key,type,properties} = property
  return {
    key,
    type,
    properties,
    parent:{key,type}
  }
}

export const parse = (jsonCode: object) => {
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
  modelEntityList.unshift(root);

  console.log('modelEntityList',modelEntityList);

  return modelEntityList
}
