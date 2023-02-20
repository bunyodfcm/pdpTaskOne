import { useState, useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("salom");
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>change</button>
    </div>
  );
}

export default App;
