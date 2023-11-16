import { useState } from "react";
import { Link } from "react-router-dom";
import Task from './Task.jsx';

export default function Tasks({ tasks, onChangeIndex, onDeleteTask }) {
  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  function toggleCheckHandler(index) {
    setCheckedState((prevState) => {
      const state = [...prevState];
      state[index] = !state[index];
      return state;
    });
  }

  const taskComponent = tasks.map((task, index) => {
    return (
      <Task
        to="/task"
        key={task.id}
        isChecked={checkedState[index]}
        onToggleCheck={() => toggleCheckHandler(index)}
        onChangeIndex={() => onChangeIndex(index)}
        onDeleteTask={() => onDeleteTask(task)}
      >
        {task.taskTitle}
      </Task>
    );
  });
  return (
    <>
      <ul>{taskComponent}</ul>
      <Link to="/newTask">New Task</Link>
      <Link to="/bin">Bin</Link>
    </>
  );
}
