import TaskImg from "../../assets/svg/task.svg";
import TaskImgBlue from "../../assets/svg/task-blue.svg";
import TaskImgOrange from "../../assets/svg/task-orange.svg";
import TaskImgRed from "../../assets/svg/task-red.svg";

import classes from "./Header.module.css";

export default function Header({ themeColor }) {
  let imgSrc = TaskImg;
  let textColor = "";

  switch (themeColor) {
    case "blue":
      imgSrc = TaskImgBlue;
      textColor = "textBlue"
      break;

    case "orange":
      imgSrc = TaskImgOrange;
      textColor = "textOrange"
      break;

    case "red":
      imgSrc = TaskImgRed;
      textColor = "textRed"
      break;
  }

  return (
    <div className={classes.header}>
      <img src={imgSrc} alt="task" />
      <h1 className={`${classes.headerText} ${textColor}`}>Tasks</h1>
    </div>
  );
}
