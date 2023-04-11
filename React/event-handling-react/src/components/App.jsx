//jshint esversion:6
import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Login");
  const [isMouseOver, setMouseOver] = useState(false);
  
  function handleMouseOver (){
    setMouseOver(true);

  }

  const handleMouseOut = () => setMouseOver(false);
  // const handleClick = () => setHeadingText("Welcome");

  function handleClick() {
    console.log("clik ");
    setHeadingText("Welcome");

  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{backgroundColor: isMouseOver ? "red" : "green"}}
        onMouseOver={ handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      
      >Submit</button>
    </div>
  );
}

export default App;
