import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
// import {gameData} from '../data/game-data'

export default function Footer() {

    return <Wrapper color={theme.darkerGrey}>
        <Link
            color={theme.blueLink}
            className="App-link"
            href="https://www.patreon.com/apocabot"
            target="_blank"
            rel="noopener noreferrer"
        >
            Patreon
        </Link>
        <Link
            color={theme.blueLink}
            className="App-link"
            href="https://github.com/apocabot/ApocaBot"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </Link>
        <Link
            color={theme.blueLink}
            className="App-link"
            href="https://discord.com/api/oauth2/authorize?client_id=723981824455344180&permissions=3072&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
        >
            Discord
        </Link>
    </Wrapper>
}

const Wrapper = styled.div`
    padding: 20px;
    background-color: ${p => p.color};
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`
const Link = styled.a`
    color: ${p => p.color}
    
`