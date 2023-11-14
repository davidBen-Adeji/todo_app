import {
  useMatch,
  useResolvedPath,
  Link,
} from "react-router-dom";

import { INITIAL_TASKS } from "./INITIAL_TASKS.js";

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

export default function Home({ onChangeIndex }) {
  const taskComponent = INITIAL_TASKS.map((task, index) => {
    return (
      <CustomLink
        to="/task"
        key={`${task.taskName}_${Math.random()}`}
        onClick={() => onChangeIndex(index)}
      >
        {task.taskName}
      </CustomLink>
    );
  });
  return <>{<ul>{taskComponent}</ul>}</>;
}

function CustomLink({ to, children, ...props }) {
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
