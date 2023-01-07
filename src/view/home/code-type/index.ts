import {ToTypescript} from "./ToTypescript";

export interface CodeType {
  label: string;
  value: number;
  transform: CodeTypeTransform;
}

export type CodeTypeTransform = (json: any | string) => string;

export const codeTypeList: CodeType[] = [
  {
    label: 'TypeScript',
    value: 1,
    transform: ToTypescript
  }
]
