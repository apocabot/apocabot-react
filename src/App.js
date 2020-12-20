import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './elements/header'
import GameSelect from './elements/game-select'
import {gameData} from './data/game-data'
import './App.css';

function App() {



  return (
    <div className="App">
      <Header/>
      <GameSelect />
        
        <a
          className="App-link"
          href="https://www.patreon.com/apocabot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to our Patreon
        </a>
    </div>
  );
}

export default App;

const Label = styled.label`
  margin-right: 10px;
  margin-top: -10px;
`
const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`