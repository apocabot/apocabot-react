import React from 'react'
import styled from 'styled-components'
import Header from './components/header'
import GameSelect from './components/game-select'
import Footer from './components/footer'
import {theme} from './theme'
// import {gameData} from './data/game-data'
import './App.css';

function App() {



  return (
    <AppWrapper color={theme.darkGrey}>
      <Header/>
      <GameSelect />
      <Footer />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  background-color: ${p=>p.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: white;
`