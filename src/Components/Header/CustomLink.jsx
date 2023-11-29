import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { removeNewId } from "../../util/functions";

export default function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  let opacityClass = "opacity-80";
  if (isActive) {
    opacityClass = "opacity-100";
  }

  return (
    <Link
      className={`relative flex gap-1 items-end hover:opacity-100 focus:opacity-100 ${opacityClass}`}
      to={to}
      onClick={removeNewId}
    >
      {children}
    </Link>
  );
}
