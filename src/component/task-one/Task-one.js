import React from "react";
import Timer from "../task-one/timer/Timer";
import Stopwatch from "../task-one/stopwatch/Stopwatch";
import Counters from "../task-one/counters/Counters";

const TaskOne = () => {
  return (
    <div>
      <button >Homework 1.1: Stopwatch</button>
      <Stopwatch />
      <h3>Homework 1.2: Timer</h3>
      <Timer />

      <h3>Homework 2: Counters</h3>
      <Counters/>
    </div>
  );
};

export default TaskOne;
