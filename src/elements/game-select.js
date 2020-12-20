import React from 'react'
import styled from 'styled-components'
import {gameData} from '../data/game-data'

export default function GameSelect() {

    return <Wrapper>
        {gameData.map(s =>
            <ImageBox
                key={s.hypName}
                src={s.imageUrl}
            >
                <TitleBox className={"title"}>{s.name}</TitleBox>
            </ImageBox>
        )}
    </Wrapper>
}

const ImageBox = styled.div`
    height: 200px;
    width: 200px;
    margin: 20px;
    border: 2px solid white;
    background-image: url(${p => p.src});
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
& .title {
  display:none;
}
&:hover .title {
  display:flex;
}
`

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const TitleBox = styled.div`
    display: flex;
    background-color: white;
    color: black;
    align-items: center;
    justify-content: center;
    width: 90%;
    font-weight: bold;
`