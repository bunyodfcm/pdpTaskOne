import React, { useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [second, setScond] = useState(0);
  const [time, setTime] = useState(0);
  const [statusBtn, setStatusBtn] = useState(false);
  //   const secondTime = setInterval(startTimer, 1000);

  const startTimer = () => {
    const a = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
};
const stopTimer = () => {
    
    clearInterval(a);
  };
  const resetTimer = () => {
    setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer} className="btn">
        start
      </button>
      <button onClick={stopTimer} className="btn">
        stop
      </button>
      <button onClick={resetTimer} className="btn" disabled={statusBtn}>
        reset
      </button>
    </div>
  );
};

export default Stopwatch;
