import React from 'react'
import styled from 'styled-components'

export default function GameSelect() {

    let iconList = [
        ["Apocalypse World", "https://i.imgur.com/axsiHTi.png", "apocalypse-world"],
        ["Burned Over", "https://i.imgur.com/t4RSNmg.png", "burned-over"],
        ["Dungeon World", "https://i.imgur.com/rffkAsW.png", "dungeon-world"],
        ["Masks", "https://i.imgur.com/ThMlFyE.png", "masks"],
        ["Monsterhearts 2", "https://i.imgur.com/T6tTf9N.jpg", "monsterhearts-2"],
        ["Monster of the Week", "https://i.imgur.com/a9Bi8zM.jpg", "motw"],
        ["The Sprawl", "https://i.imgur.com/qwbb6vQ.jpg", "the-sprawl"],
        ["The Veil", "https://i.imgur.com/ML1mEvp.jpg", "the-veil"],
        ["Uncharted Worlds", "https://i.imgur.com/MJB1dGn.png", "uncharted-worlds"],
        ["Urban Shadows", "https://i.imgur.com/Cmgo3Cf.jpg", "urban-shadows"]
    ]

    return <Wrapper>
        {iconList.map(s =>
            <ImageBox
                key={s[0]}
                src={s[1]}
            >
                <TitleBox className={"title"}>{s[0]}</TitleBox>
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