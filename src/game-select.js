import React, { useState } from 'react'
import {apocabotLogo} from './images'
import styled from 'styled-components'

export default function GameSelect() {

    let iconList = [
        "https://i.imgur.com/axsiHTi.png",
        "https://i.imgur.com/t4RSNmg.png",
        "https://i.imgur.com/rffkAsW.png",
        "https://i.imgur.com/ThMlFyE.png",
        "https://i.imgur.com/T6tTf9N.jpg",
        "https://i.imgur.com/a9Bi8zM.jpg",
        "https://i.imgur.com/qwbb6vQ.jpg",
        "https://i.imgur.com/ML1mEvp.jpg",
        "https://i.imgur.com/MJB1dGn.png",
        "https://i.imgur.com/Cmgo3Cf.jpg"
    ]

    return<Wrapper>
        {iconList.map(s => 
            <ImageBox src={s}/>
            )}

    </Wrapper>
}

const ImageBox = styled.img`
    height: 200px;
    width: 200px;
    margin: 20px;
    border: 2px solid white;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`