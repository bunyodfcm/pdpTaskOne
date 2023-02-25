import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import CounterItem from "./Counter-item";
import "./Counter.css";

const Counters = () => {
  const [count, setCount] = useState(1);

  const myFunc = () => {
    setCount((prev) => prev + 1);
  };

  const componnentArr = useMemo(() => {
    const newArr = new Array(count).fill("");
    return newArr;
  }, [count]);


  return (
    <div>
      {componnentArr.map((_, index) => {
        return <CounterItem />;
      })}
      <button onClick={() => myFunc()} className='btn btn-green'>add Counter</button>
    </div>
  );
};

export default Counters;
