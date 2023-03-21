//jshint esversion:6
import React, { useState } from "react";

function countInitail() {
  console.log("run function");
  return 5;
}

function App() {
  const [count, setCount] = useState(() => countInitail());

  function decreaseCount() {
    setCount((previousCount) => previousCount - 1);

    // setCount(count - 1); // bu şekilde yazınca istediğimiz değeri vermez birden fazla alt alta kullanırsak
  }

  function incerementCount() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={incerementCount}>+</button>
    </>
  );
}

export default App;
