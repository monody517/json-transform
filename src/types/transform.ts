import {Entity} from "./entity";
import {ArrayProperty, NormalProperty, ObjectProperty, Property} from "./property";

type TransformOptions<P,> = (params: {property: P,entity:Entity}) => string

export interface Options {
  before?: TransformCodeEntityFn;
  after?: TransformCodeEntityFn;
  default: TransformOptions<Property>;
  // 数据类型
  array?: TransformOptions<ArrayProperty>;
  object?: TransformOptions<ObjectProperty>;
  string?: TransformOptions<NormalProperty>;
  boolean?: TransformOptions<NormalProperty>;
  number?: TransformOptions<NormalProperty>;
  null?: TransformOptions<NormalProperty>;
}

export type TransformCode = (list: Entity[],options:Options) => string;
export type TransformCodeEntityFn = (params: { entity: Entity }) => string;
