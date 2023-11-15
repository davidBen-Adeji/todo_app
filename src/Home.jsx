import { useMatch, useResolvedPath, Link } from "react-router-dom";

// // # functionalities
// // - create task (route)
// // - under task (route)
// //  - add todo item
// //     -under todo item
// //      - mark as done
// //      - delete todo item
// //      - edit todo item

// - delete task
// - edit task
// - mark task as done
// view completed tasks (route)

export default function Home({ tasks, onChangeIndex, onDeleteTask }) {
  const taskComponent = tasks.map((task, index) => {
    return (
      <Task
        to="/task"
        key={task.id}
        onChangeIndex={() => onChangeIndex(index)}
        onDeleteTask={() => onDeleteTask(task)}
      >
        {task.taskTitle}
      </Task>
    );
  });
  return (
    <>
      {<ul>{taskComponent}</ul>}
      <Link to="/newTask">New Task</Link>
    <Link to="/bin">Bin</Link>
    </>
  );
}

function Task({ to, children, onChangeIndex, onDeleteTask}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={onChangeIndex}>
        {children}
      </Link>
      <button onClick={onDeleteTask} type="submit">delete</button>
    </li>
  );
}
