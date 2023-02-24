import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import CounterItem from "./Counter-item";
import "./Counter.css";

const Counters = () => {
  // const [number, setNumber] = useState(1);
  // const arr = [];
  // useEffect(() => {
  //   for (let i = 0; i < x; i++) {
  //     arr.push(<CounterItem />);
  //   }

  // }, number);
  const [count, setCount] = useState(1);
  const myArr = [];

  const myFunc = () => {
    setCount((prev) => prev + 1);
  };

  const componnentArr = useMemo(() => {
    const newArr = new Array(count).fill("");
    return newArr;
  }, [count]);

  console.log(componnentArr);

  return (
    <div>
      {componnentArr.map((_, index) => {
        return <CounterItem />;
      })}
      <button onClick={() => myFunc()}>add Counter</button>
    </div>
  );
};

export default Counters;
