import React from "react";
import JsonEditor from "../../components/json-editor";
import './index.scss'
import MdEditor from "../../components/md-editor";
import Toolbar from "./components/Toolbar";
import {codeTypeList} from './code-type'
import CodeTypeSelector from "./components/CodeTypeSelector";

const Home = () => {
  console.log(codeTypeList)
  return (
    <div className="page-wrapper">
      <div className="container">
        <Toolbar />
        <CodeTypeSelector />
        <div className="editor-container">
          <JsonEditor />
            <MdEditor />
        </div>

      </div>

    </div>
  )
}

export default Home
