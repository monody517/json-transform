import {CodeTypeTransform} from "./index";

export const ToTypescript: CodeTypeTransform = (json) => {

  const code =     'export interface Root {\n' +
    '  title: string;\n' +
    '  gitee: string;\n' +
    '  orgId: number;\n' +
    '  orgCode?: any;\n' +
    '  centerState: boolean;\n' +
    '  info: Info;\n' +
    '  data: Data[];\n' +
    '  strList: number[];\n' +
    '  orderList?: any[];\n' +
    '}\n' +
    '\n' +
    'export interface Parent {\n' +
    '  name: string;\n' +
    '}\n' +
    '\n' +
    'export interface Info {\n' +
    '  addressCode: string;\n' +
    '  parent: Parent;\n' +
    '}\n' +
    '\n' +
    'export interface Data {\n' +
    '  content: string;\n' +
    '  memo: string;\n' +
    '}\n'

  return "```ts\n" + code + "\n```";
}
