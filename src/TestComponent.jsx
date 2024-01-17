// import style from  './ToDo.module.css'
import { useState } from "react";

const TestComponent = () => {
  const state = {
    message: "clicked",
    handle() {
      console.log(state.message);
      console.log(this);
    },
  };
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  let timerForMessage = null;
  const test = "adasds";
  const handleIncrement = () => {
    if (timerForMessage) {
      timerForMessage = null;
      setErrorMessage("");
    }
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) {
      if (!errorMessage.length) {
        setErrorMessage("cannot go below zero");
        console.log(test);
        timerForMessage = setTimeout(() => setErrorMessage(""), 3000);
      }

      return;
    }
    // console.log(test);
    setCounter(counter - 1);
  };
  return (
    <>
      <p>{errorMessage || counter}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default TestComponent;
