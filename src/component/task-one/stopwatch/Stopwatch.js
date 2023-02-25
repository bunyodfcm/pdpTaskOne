import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [start, setStart] = useState(false);
  const [second, setSecond] = useState(0);
  const [minut, setMinut] = useState(0);
  const [Hour, setHour] = useState(0);

  useEffect(() => {
    if (start) {
      const a = setInterval(() => {
        setSecond((prev) => prev + 1);
        clearInterval(a);
      }, 1000);
    }
  }, [start, second]);
  if (second == 60) {
    setMinut((min) => min + 1);
    setSecond(0);
  }
  if (minut == 60) {
    setHour((hour) => hour + 1);
    setMinut(0);
  }
const clear = ()=>{
  setStart(false)
  setSecond(0)
  setMinut(0)
  setHour(0)
}
  return (
    <div>
      <h1>{Hour + " : " + minut + " : " + second}</h1>
      <button
        onClick={() => setStart((prev) => !prev)}
        disabled={start}
        className="btn btn-blue"
      >
        start
      </button>
      <button
        onClick={() => setStart((prev) => !prev)}
        disabled={!start}
        className="btn btn-red"
      >
        stop
      </button>
      <button
        onClick={() => clear()}
        disabled={start}
        className="btn btn-green"
      >
        clear
      </button>
    </div>
  );
};

export default Stopwatch;
