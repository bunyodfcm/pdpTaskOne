import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [start, setStart] = useState(false);
  const [second, setSecond] = useState(0);
  const [minut, setMinut] = useState(0);
  const [hour, setHour] = useState(0);
  const changeSecondAdd = () => {
    if (second < 60) {
      setSecond((prev) => prev + 1);
    }
  };
  const changeSecondRemove = () => {
    if (second > 0) {
      setSecond((minus) => minus - 1);
    }
  };
  const changeMinutAdd = () => {
    if (minut < 60) {
      setMinut((prev) => prev + 1);
    }
  };
  const changeMinutRemove = () => {
    if (minut > 0) {
      setMinut((minus) => minus - 1);
    }
  };
  const changeHourAdd = () => {
    if (hour < 60) {
      setHour((prev) => prev + 1);
    }
  };
  const changeHourRemove = () => {
    if (hour > 0) {
      setHour((minus) => minus - 1);
    }
  };
  useEffect(() => {
    if (start && second > 0) {
      const a = setInterval(() => {
        setSecond((prev) => prev - 1);
        clearInterval(a);
      }, 1);
    }
  }, [start, second]);
  if (second == 0 && start) {
    if (minut > 0) {
      setMinut((min) => min - 1);
      setSecond(60);
    }
    if (minut == 0) {
      if (hour != 0) {
        setHour((hour) => hour - 1);
        setMinut(60);
      }
    }
  }
  const clear = () => {
    setStart(false);
    setSecond(0);
    setMinut(0);
    setHour(0);
  };
  return (
    <div className="timer">
      <div className="timer-card">
        <span>Secund</span>
        <div>{second}</div>
        <div className="time-btn__group">
          <button
            onClick={() => changeSecondAdd()}
            disabled={start}
            className="btn btn-blue"
          >
            +
          </button>
          <button
            onClick={() => changeSecondRemove()}
            disabled={start}
            className="btn btn-red"
          >
            -
          </button>
        </div>
      </div>
      <div className="timer-card">
        <span>Minut</span>
        <div>{minut}</div>
        <div className="time-btn__group">
          <button
            onClick={() => changeMinutAdd()}
            disabled={start}
            className="btn btn-blue"
          >
            +
          </button>
          <button
            onClick={() => changeMinutRemove()}
            disabled={start}
            className="btn btn-red"
          >
            -
          </button>
        </div>
      </div>
      <div className="timer-card">
        <span>Hour</span>
        <div>{hour}</div>
        <div className="time-btn__group">
          <button
            onClick={() => changeHourAdd()}
            disabled={start}
            className="btn btn-blue"
          >
            +
          </button>
          <button
            onClick={() => changeHourRemove()}
            disabled={start}
            className="btn btn-red"
          >
            -
          </button>
        </div>
      </div>
      <div className="timer-start">
        {hour + " : " + minut + " : " + second}
        <div className="time-btn__group">
          <button
            className="btn btn-blue"
            onClick={() => setStart((prev) => !prev)}
            disabled={start}
          >
            start timer
          </button>
          <button
            className="btn btn-red"
            onClick={() => setStart((prev) => !prev)}
            disabled={!start}
          >
            stop
          </button>
          <button
            className="btn btn-green"
            onClick={() => clear((prev) => !prev)}
            disabled={start}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
