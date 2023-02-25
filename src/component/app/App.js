import React, { useState } from "react";
import TaskOne from "../task-one/Task-one";
import './App.css'

function App() {
  const [lessonOne, setLessonOne] = useState(false);
  return (
    <div className="lesson">
      <button
        onClick={() => setLessonOne((prev) => !prev)}
        className="btn-link"
      >
        lesson 1
      </button>
      <div className="lesson-body">{lessonOne ? <TaskOne /> : ""}</div>
    </div>
  );
}

export default App;
