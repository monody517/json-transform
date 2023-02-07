import React, {useEffect, useState} from "react";
import JsonEditor from "../../components/json-editor";
import './index.scss'
import MdEditor from "../../components/md-editor";
import Toolbar from "./components/Toolbar";
import {codeTypeList} from './code-type'
import CodeTypeSelector from "./components/CodeTypeSelector";

const Home = () => {

  const [jsonCode,setJsonCode] = useState({  "title": "JsonToAny 示例JSON (包含所有数据格式)",
    "obj": {
      "name": "jack",
      "age": "18",
      "birthday": {
        "day": 12,
        "month": 6,
        "year": 1998
      }
    }})
  const [mdCodeText,setMdCodeText] = useState('')

  const jsonToCode = (json: object)=>{
    // const codeType = codeTypeList.find(
    //   (item) => item.value ===
    // )
    const codeType = codeTypeList[0]

    if(codeType){
      setMdCodeText("" + codeType.transform(json))
    }
  }

  useEffect(()=>{
    jsonToCode(jsonCode || "{}")
  },[jsonCode])

  return (
    <div className="container">
      <Toolbar />
      <CodeTypeSelector />
      <div className="editor-container">
        <JsonEditor model={jsonCode} onChange={setJsonCode}/>
        <MdEditor model={mdCodeText} />
      </div>
    </div>
  )
}

export default Home
