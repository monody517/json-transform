// @ts-ignore
import { JsonEditor as Editor } from 'jsoneditor-react';
import React from "react";
import './index.scss'

const JsonEditor = () => {
  return (
      <Editor
        allowedModes={['code','tree','form','text','view']}
        mode={'code'}
        value={
          {
            "title": "JsonToAny 示例JSON (包含所有数据格式)",
            "gitee": "https://gitee.com/XieTS/json-to-any-web",
            "orgId": 789,
            "orgCode": null,
            "centerState": false,
            "info": {
              "address_code": "自动格式化下划线",
              "parent": {
                "name": "支持多层级对象嵌套"
              }
            },
            "data": [
              {
                "content": "不同对象"
              },
              {
                "memo": "自动合并"
              }
            ],
            "strList": [
              1,
              34
            ],
            "orderList": [
              {},
              "特殊数据做any处理",
              true
            ]
          }
        }
      />
  )
}

export default JsonEditor
