import TaskImg from "../../assets/svg/task.svg";
import TaskImgBlue from "../../assets/svg/task-blue.svg";
import TaskImgOrange from "../../assets/svg/task-orange.svg";
import TaskImgRed from "../../assets/svg/task-red.svg";

import classes from "./Header.module.css";

export default function Header({ themeColor }) {
  let imgSrc = TaskImg;

  switch (themeColor) {
    case "blue":
      imgSrc = TaskImgBlue;
      break;

    case "orange":
      imgSrc = TaskImgOrange;
      break;

    case "red":
      imgSrc = TaskImgRed;
      break;
  }

  return (
    <div className={classes.header}>
      <img src={imgSrc} alt="task" />
      <h1 className={`${classes.headerText} text`}>Tasks</h1>
    </div>
  );
}
