import React, { useState, useContext } from "react";
import { UpdateContext } from "../context/UpdateContext";


export const TodoList = () => {
    const { addWork } = useContext(UpdateContext)
    const [add, setAdd] = useState("")

    const handleSubmit = () => {
        addWork(add)
    }

    return (
        <div className="App">
            <p>Here </p>
            <input type="text" value={add} onChange={(e) => setAdd(e.target.value)}></input>
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    )
}