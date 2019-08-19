import React, { useState, useEffect } from "react";

let counter1 = 0;
let counter2 = 10;

function CounterWithUseEffect() {
  // Declare a new state variable, which we'll call "count1 and count2"
  const [count1, setCount1] = useState(counter1);
  const [count2, setCount2] = useState(counter2);

  useEffect(() => {
    console.log("effect called");
    document.title = `Counter is ${count1}`;
  });

  function increaseCounter() {
    if (count1 === counter2) {
      // Reset Counter
      setCount1(counter1);
      setCount2(counter2);
    } else {
      // Increase Counter
      if (count2 % 2 === 1) {
        setCount1(prevCount => prevCount + 2);
      }
      setCount2(prevCount => prevCount - 1);
    }
  }

  return (
    <div>
      <p>
        My Counter is {count1} || {count2}
      </p>
      <button onClick={increaseCounter}>
        {count1 === counter2 ? `Reset Counter` : `Click me`}
      </button>
    </div>
  );
}

export default CounterWithUseEffect;
