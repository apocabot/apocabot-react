import React, { useState } from 'react'
import apocabotLogo from './apocabot-logo.png'
import styled from 'styled-components'
import './App.css';

function App() {

  const fields = ['name', 'command', 'roll', 'text', 'success', 'mixed', 'fail']
  const [customMove, setCustomMove] = useState(
    {
      name: "",
      command: "",
      roll: "",
      text: "",
      success: "",
      mixed: "",
      fail: ""
    })

  return (
    <div className="App">
      <header className="App-header">
        <img src={apocabotLogo} className="App-logo" alt="logo" />
        <p>
          Create a New Custom Move below:
        </p>
        {fields.map(x =>
          <div>
            <Label>{x + ":"}</Label>
            <input
              value={customMove[x]}
              name={x}
              onChange={e =>
                setCustomMove({ ...customMove, [e.target.name]: e.target.value })}>
            </input>
          </div>
        )}
        <button onClick={() =>  navigator.clipboard.writeText(
          `!newmove name+"${customMove.name}" command+"${customMove.command}" roll+"${customMove.roll}" text+"${customMove.text}" success+"${customMove.success}" mixed+"${customMove.mixed}" fail+"${customMove.fail}"`
          )}>
            Copy Move to Clipboard
        </button>
        <a
          className="App-link"
          href="https://www.patreon.com/apocabot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to our Patreon
        </a>
      </header>
    </div>
  );
}

export default App;

const Label = styled.label`
  margin-right: 10px
`