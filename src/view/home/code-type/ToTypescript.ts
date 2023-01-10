import {CodeTypeTransform} from "./index";
import {parse} from "../../../utils";

export const ToTypescript: CodeTypeTransform = (json: object) => {

  const entities = parse(json)

  const code = entities

  console.log(code);

  return "```ts\n" + code + "\n```";
}
