import './App.css';
import React, { useState } from 'react';
import MarkdownRender from './components/MarkdownRender.js'
import placeholder from './components/placeholder.js'

function App() {

  const [text, setText] = useState(placeholder);

  const input = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <div className="heading">
        <h1 id="title">Markdown previewer</h1>
      </div>
      <div className="main-container">
      <div className="editor-container">
        <textarea id="editor"
        onChange={input}>{placeholder}</textarea>
      </div>
      <div className="preview-container" id="preview">
        <MarkdownRender inputText={text}/>
      </div>
      </div>
    </div>
  );
}

export default App;


