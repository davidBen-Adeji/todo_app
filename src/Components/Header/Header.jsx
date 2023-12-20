import TaskImg from "../../assets/svg/task-white.svg";
import BinImg from "../../assets/svg/bin-white.svg";
import CustomLink from "./CustomLink.jsx";

import classes from "./Header.module.css"

export default function Header({ undoneTasksLength, binLength }) {
  let tasksOpacityClass = "opacity-0";
  let binOpacityClass = "opacity-0";

  let bgColor = classes.headerRed;
  let lengthColor = classes.lengthRed;

  if (undoneTasksLength > 0) {
    tasksOpacityClass = "opacity-100";
  }

  if (binLength > 0) {
    binOpacityClass = "opacity-100";
  }

  return (
    <header className={`${classes.header} ${bgColor}`}>
      <CustomLink to="/">
        <img className={classes.taskImg} src={TaskImg} alt="tasks" />
        <p className="text-white mb-0.5">Tasks</p>
        <p
          className={`mb-1 ${classes.headerLengths} ${lengthColor} ${tasksOpacityClass}`}
        >
          {undoneTasksLength}
        </p>
      </CustomLink>
      <CustomLink to="/bin">
        <img className={classes.binImg} src={BinImg} alt="bin" />
        <p className="text-white">Bin</p>
        <p
          className={`mb-0.5 ${classes.headerLengths} ${lengthColor} ${binOpacityClass}`}
        >
          {binLength}
        </p>
      </CustomLink>
    </header>
  );
}
