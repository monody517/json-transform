// @ts-ignore
import { JsonEditor as Editor } from 'jsoneditor-react';
import React from "react";
import './index.scss'

interface Props{
  model: object;
  onChange: any
}

const JsonEditor = (props: Props) => {
  return (
      <Editor
        allowedModes={['code','tree','form','text','view']}
        mode={'code'}
        value={props.model}
        onChange={(e:object)=> {
          props.onChange(e)
        }}
      />
  )
}

export default JsonEditor
