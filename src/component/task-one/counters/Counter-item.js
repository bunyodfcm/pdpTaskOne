import React, { useState } from "react";
import "./Counter.css";

const CounterItem = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((p) => p + 1)} className='btn btn-blue' >+</button>
      <button onClick={() => setCount((p) => p - 1)} className='btn btn-red' >-</button>
    </div>
  );
};

export default CounterItem;
