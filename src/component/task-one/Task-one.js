import React, { useState } from "react";
import Timer from "../task-one/timer/Timer";
import Stopwatch from "../task-one/stopwatch/Stopwatch";
import Counters from "../task-one/counters/Counters";
import TrafficLight from "./Traffic-light/Traffic-light";

const TaskOne = () => {
  const [homeworkOne, setHomeworkOne] = useState(false);
  const [homeworkTwo, setHomeworkTwo] = useState(false);
  const [homeworkThree, setHomeworkThree] = useState(false);
  return (
    <div>
      <button
        className="btn-link"
        onClick={() => setHomeworkOne((prev) => !prev)}
      >
        Homework 1:{" "}
      </button>
      <div className="lesson-body">
        {homeworkOne ? (
          <div>
            <h3>1. Stopwatch</h3>
            <Stopwatch />
            <h3>2. Timer</h3>
            <Timer />
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn-link"
        onClick={() => setHomeworkTwo((prev) => !prev)}
      >
        Homework 2:{" "}
      </button>
      <div className="lesson-body">
        {homeworkTwo ? (
          <div>
            <h3>Counters</h3>
            <Counters />
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn-link"
        onClick={() => setHomeworkThree((prev) => !prev)}
      >
        Homework 3:{" "}
      </button>
      <div className="lesson-body">
        {homeworkThree ? (
          <div>
            <h3>Traffic light</h3>
            <TrafficLight/>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TaskOne;
