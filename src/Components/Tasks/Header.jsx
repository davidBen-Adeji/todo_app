// import TaskImg from "../../assets/svg/task.svg";
import TaskImgBlue from "../../assets/svg/task-blue.svg"

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <img src={TaskImgBlue} alt="task" />
      <h1 className={classes.headerText}>Tasks</h1>
    </div>
  );
}
