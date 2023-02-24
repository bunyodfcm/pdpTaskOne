import React, { useState } from "react";
import "./Counter.css";

const CounterItem = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((p) => p + 1)}>+</button>
      <button onClick={() => setCount((p) => p - 1)}>-</button>
    </div>
  );
};

export default CounterItem;
