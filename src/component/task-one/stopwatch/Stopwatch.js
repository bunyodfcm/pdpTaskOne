import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [start, setStart] = useState(false);
  const [second, setSecond] = useState(0);
  const [minut, setMinut] = useState(0);
  const [Hour, setHour] = useState(0);

  useEffect(() => {
    if (start) {
      setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 10);
    }
  }, [start]);
  if (second == 60) {
    setMinut((min)=>min+1)
    setSecond(0)
  }
  if (minut == 60) {
    setHour((hour)=>hour+1)
    setMinut(0)
  }


  return (
    <div>
      <h1>{Hour+' : ' + minut+ ' : ' + second}</h1>
      <button onClick={() => setStart((prev) => !prev)} className="btn">
        start
      </button>
    </div>
  );
};

export default Stopwatch;
