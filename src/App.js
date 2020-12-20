import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/header'
import GameSelect from './components/game-select'
import Footer from './components/footer'
import {gameData} from './data/game-data'
import './App.css';

function App() {



  return (
    <div className="App">
      <Header/>
      <GameSelect />
      <Footer />
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