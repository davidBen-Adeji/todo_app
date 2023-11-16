import { useState } from "react";
import { useMatch, useResolvedPath, Link } from "react-router-dom";

export default function Home({ tasks, onChangeIndex, onDeleteTask }) {
  const [checkedState, setCheckedState] = useState(new Array(tasks.length).fill(false));

function toggleCheckHandler(index) {
    setCheckedState(prevState => {
      const state = [...prevState];
      state[index] = !state[index];
      return state;
    })
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

function Task({ to, children, isChecked, onToggleCheck, onChangeIndex, onDeleteTask }) {
  const path = isChecked ? "" : to;
  const resolvedPath = useResolvedPath(path);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggleCheck}
      />
      <Link to={path} onClick={onChangeIndex}>
        {children}
      </Link>
      <button onClick={onDeleteTask} type="submit">
        delete
      </button>
    </li>
  );
}
