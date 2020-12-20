import React from 'react'
import { apocabotLogo } from '../images'
import styled from 'styled-components'
import { theme } from '../theme'
// import {gameData} from '../data/game-data'

export default function Header() {

    return <Wrapper color={theme.darkerGrey}>
        <Text>
            <Title>
                ApocaBot:
            </Title>
            <Description>
                A Discord Bot for PbtA Games
            </Description>
        </Text>
        <Logo />
        <Info>
            <p>Click on a game to access ApocaBot Helper</p>
            <p>The helper lets you input Character Info or Custom Moves</p>
            </Info>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    flex-flow: wrap;
    background-color: ${p=>p.color};
`

const Logo = styled.img`
    background-image: url(${apocabotLogo});
    background-repeat: no-repeat;
    background-size: 100%;
    padding-bottom:20%;
    width: 20%;
    margin-right: 50px;
    margin-left: 50px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
`

const Title = styled.div`
    font-size: xx-large;
`

const Description = styled.div`
    font-size: large;
`

const Info = styled.div`
    width: 33%;
    font-size: 16px;
`