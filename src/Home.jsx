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

export default function Home({ tasks, onChangeIndex }) {
  const taskComponent = tasks.map((task, index) => {
    return (
      <Task
        to="/task"
        key={`${task.taskTitle}_${Math.random()}`}
        onClick={() => onChangeIndex(index)}
      >
        {task.taskTitle}
      </Task>
    );
  });
  return (
    <>
      {<ul>{taskComponent}</ul>}
      <Link to="/newTask">New Task</Link>
    </>
  );
}

function Task({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
