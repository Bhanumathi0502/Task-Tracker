import { useState } from "react";
import './act4.1.css';

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task !== "") {               // no trim used
      const time = new Date().toLocaleTimeString();
      setList([...list, { text: task, time: time }]);
      setTask("");
    }
  }
  function removeTask(index) {
  setList(list.filter((item, i) => i !== index));
}


  return (
  <div className="container">
    <h1>Task Tracker</h1>
    <h3>Input tasks completed and track the time they were added.</h3>

    <input
      type="text"
      value={task}
      placeholder="Enter a task..."
      onChange={(e) => setTask(e.target.value)}
    />

    <button onClick={addTask}>Add Task</button>

    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item.text} - <b>{item.time}</b>

          <button onClick={() => removeTask(index)}>
            -
          </button>
        </li>
      ))}
    </ul>
  </div>
);

}