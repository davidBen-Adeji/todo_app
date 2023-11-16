import { useMatch, useResolvedPath, Link } from "react-router-dom";

export default function Home({
  tasks,
  onToggleCheck,
  onChangeIndex,
  onDeleteTask,
}) {
  const taskComponent = tasks.map((task, index) => {
    return (
      <Task
        to="/task"
        key={task.id}
        isChecked={task.isChecked}
        onToggleCheck={() => onToggleCheck(index)}
        onChangeIndex={() => onChangeIndex(index)}
        onDeleteTask={() => onDeleteTask(task)}
      >
        {task.taskTitle}
      </Task>
    );
  });
  return (
    <>
      <input type="checkbox" />
      <ul>{taskComponent}</ul>
      <Link to="/newTask">New Task</Link>
      <Link to="/bin">Bin</Link>
    </>
  );
}

function Task({
  to,
  children,
  isChecked,
  onToggleCheck,
  onChangeIndex,
  onDeleteTask,
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <input type="checkbox" onChange={onToggleCheck} checked={isChecked} />
      <Link to={to} onClick={onChangeIndex}>
        {children}
      </Link>
      <button onClick={onDeleteTask} type="submit">
        delete
      </button>
    </li>
  );
}
