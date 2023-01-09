import {CodeTypeTransform} from "./index";
import {parse} from "../../../utils";

export const ToTypescript: CodeTypeTransform = (json: object) => {

  console.log('json',json)

  const entities = parse(json)

  const code = entities

  return "```ts\n" + code + "\n```";
}
