import React from "react";
import JsonEditor from "../../components/json-editor";
import './index.scss'
import MdEditor from "../../components/md-editor";

const Home = () => {
  return (
    <div className="page-wrapper">
      <JsonEditor />
      <MdEditor />
    </div>
  )
}

export default Home
