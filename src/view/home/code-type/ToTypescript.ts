import {CodeTypeTransform} from "./index";
import {parse, transformCode} from "../../../utils";

export const ToTypescript: CodeTypeTransform = (json: object) => {

  const entities = parse(json)

  const strToTsCode = (key: string, value: string) => `  ${key}: ${value};\n`;

    const code = transformCode(entities,{
      before({entity}){
        return `export interface ${entity.key} {\n`
      },
      default({property}){
        return strToTsCode(property.key,property.type)
      },
      after(){
        return '}\n\n'
      }
    })
    console.log(code);
    return "```ts\n" + code + "\n```";
}
