import React from 'react'
import Counters from '../task-one/counters/Counters';
import Stopwatch from '../task-one/stopwatch/Stopwatch';


function App(props) {
  return (
    <div>
      <h3>Homework 1. Stopwatch</h3>
      <Stopwatch/>
      <h3>Homework 2. Stopwatch</h3>
      <Counters/>
    </div>
  );
}

export default App;
