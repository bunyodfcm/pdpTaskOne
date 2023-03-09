import React, { useState } from "react";
import Timer from "../task-one/timer/Timer";
import Stopwatch from "../task-one/stopwatch/Stopwatch";
import Counters from "../task-one/counters/Counters";
import TrafficLight from "./Traffic-light/Traffic-light";
import ListFour from "./1-4__task/List-four";
import CounterFive from "./1-5__task/Counter-five";

const TaskOne = () => {
  const [homeworkOne, setHomeworkOne] = useState(false);
  const [homeworkTwo, setHomeworkTwo] = useState(false);
  const [homeworkThree, setHomeworkThree] = useState(false);
  const [homeworkFour, setHomeworkFour] = useState(false);
  const [homeworkFive, setHomeworkFive] = useState(false);
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
            <TrafficLight />
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn-link"
        onClick={() => setHomeworkFour((prev) => !prev)}
      >
        Homework 4:{" "}
      </button>
      <div className="lesson-body">
        {homeworkFour ? (
          <div>
            <h3>Traffic light</h3>
            <ListFour />
          </div>
        ) : (
          ""
        )}
      </div>
      <button
        className="btn-link"
        onClick={() => setHomeworkFive((prev) => !prev)}
      >
        Homework 5:{" "}
      </button>
      <div className="lesson-body">
        {homeworkFive ? (
          <div>
            <h3> counter with data</h3>
            <CounterFive/>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TaskOne;
