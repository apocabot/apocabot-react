import React from 'react'
import { apocabotLogo } from './images'
import styled from 'styled-components'

export default function Header() {

    return <Wrapper>
        <Text>
            <Title>
                ApocaBot:
            </Title>
            <Description>
                A Discord Bot for PbtA Games
            </Description>
        </Text>
        <Logo />
        <Info>jkdfs kjldsjk dsjk ldjk ldkjl dkjl dfkjldfskj ldsfjk dsf jkdsf jk</Info>
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
`

const Logo = styled.img`
    background-image: url(${apocabotLogo});
    background-size: 100%;
    height: 200px;
    width: 200px;
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
`