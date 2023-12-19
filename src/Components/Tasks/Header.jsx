// import TaskImg from "../../assets/svg/task.svg";
// import TaskImgBlue from "../../assets/svg/task-blue.svg"
import TaskImgOrange from "../../assets/svg/task-orange.svg"

import classes from "./Header.module.css";

export default function Header() {
  let textColor = classes.textOrange;

  return (
    <div className={classes.header}>
      <img src={TaskImgOrange} alt="task" />
      <h1 className={`${classes.headerText} ${textColor}`}>Tasks</h1>
    </div>
  );
}
