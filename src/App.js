import React from 'react'
// import styled from 'styled-components'
import Header from './components/header'
import GameSelect from './components/game-select'
import Footer from './components/footer'
// import {gameData} from './data/game-data'
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