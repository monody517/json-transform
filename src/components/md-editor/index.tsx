import React, { useState } from 'react';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import './index.scss'

const MdEditor = () => {

  const [text,setText] = useState('111')

  return (
    <Editor
      modelValue={text}
      preview={false}
      className={'md-editor'}
    />
)

}

export default MdEditor
