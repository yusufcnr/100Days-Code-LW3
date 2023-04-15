//jshint esversion:6
import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log(name + " submitted.");
    setHeading(name);

  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
