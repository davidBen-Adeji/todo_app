import { useMatch, useResolvedPath, Link } from "react-router-dom";

export default function Task({
  to,
  children,
  isChecked,
  onToggleCheck,
  onChangeIndex,
  onDeleteTask,
}) {
  const path = isChecked ? "" : to;
  const resolvedPath = useResolvedPath(path);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <input type="checkbox" checked={isChecked} onChange={onToggleCheck} />
      <Link to={path} onClick={onChangeIndex}>
        {children}
      </Link>
      <button onClick={onDeleteTask} type="submit">
        delete
      </button>
    </li>
  );
}