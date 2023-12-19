import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { removeNewId } from "../../util/functions";

import classes from "./CustomLink.module.css";

export default function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  let opacityClass = "opacity-80";
  if (isActive) {
    opacityClass = "opacity-100";
  }

  return (
    <Link
      className={`${classes.link} ${opacityClass}`}
      to={to}
      onClick={removeNewId}
    >
      {children}
    </Link>
  );
}
