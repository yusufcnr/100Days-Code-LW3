//jshint esversion:6
import React, { useState } from "react";

export default function App() {
    var [count, setCount] = useState(0);

    return (<>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count++)}>+</button>
        <button onClick={()=> setCount(count--)}>-</button>
        <button onClick={()=> setCount(0)}>0</button>
    </>)
}