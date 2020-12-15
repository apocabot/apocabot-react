import React, { useState } from "react";
import './App.css';

export default function Form({ onSubmit, label }) {
    const [text, setText] = useState("")

    return (
        <form
            onSubmit={e => {
            e.preventDefault();
            onSubmit(text)
            setText("")
        }}
        >
            <label className={"Input-label"} >{label}:</label>
            <input value={text} onChange={e => setText(e.target.value)} />
        </form >
    )
}