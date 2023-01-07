import React, { useState } from 'react';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import './index.scss'

const MdEditor = () => {

  const [text,setText] = useState('```ts\n'+ '```'
  )

  return (
    <Editor
      modelValue={text}
      previewOnly
      className={'md-editor'}
      theme={'dark'}
      codeTheme={'github'}
      style={{backgroundColor: '#1a1a1a'}}
    />
)

}

export default MdEditor
