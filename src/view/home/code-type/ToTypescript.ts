import {CodeTypeTransform} from "./index";
import {parse, transformCode} from "../../../utils";
import {formatKey} from "../../../utils/keyTransform";

export const ToTypescript: CodeTypeTransform = (json: object) => {

  const entities = parse(json)

  const strToTsCode = (key: string, value: string) => `  ${key}${value};\n`;

  entities.forEach(entity=>{
    const {upKey} = formatKey(entity.key)
    entity.key = upKey
  })

  console.log(entities);

  const code = transformCode(entities,{
      before({entity}){
        return `export interface ${entity.key} {\n`
      },
      default({property}){
        return strToTsCode(property.key,`: ${property.type}`)
      },
      object({property}){
        return strToTsCode(property.key,`: ${property.entity.key}`)
      },
      array({property}){
        const childProperty = property.childProperty
        const {upKey} = formatKey(childProperty.key)
        if(childProperty.type === 'object'){
          return strToTsCode(property.key,`: ${upKey}[]`)
        }
        if(childProperty.type === 'null'){
          return strToTsCode(property.key,'?: any[]')
        }
        return strToTsCode(property.key,`: ${childProperty.type}[]`)
      },
      after(){
        return '}\n\n'
      },
      null({property}){
        return strToTsCode(property.key,'?:any');
      }
    })
    return "```ts\n" + code + "\n```";
}
