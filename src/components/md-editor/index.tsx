import React, { useState } from 'react';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import './index.scss'

interface Props{
  model: string;
}

const MdEditor = (props: Props) => {

  return (
    <Editor
      modelValue={props.model}
      previewOnly
      className={'md-editor'}
      theme={'dark'}
      codeTheme={'github'}
      style={{backgroundColor: '#1a1a1a'}}
    />
)

}

export default MdEditor
