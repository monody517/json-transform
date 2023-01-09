import {Property, PropertyType} from "./property";


export interface Entity {
  key: string;
  type: PropertyType;
  properties: Property[]

  parent?: {
    key: string;
    type: string;
  }
}
