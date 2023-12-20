import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";

import classes from "./DoneButton.module.css";

export default function DoneButton({ onUpdateTask, themeColor }) {
  let btnColor = "btnGreen";

  switch (themeColor) {
    case "blue":
      btnColor = "btnBlue";
      break;

    case "orange":
      btnColor = "btnOrange";
      break;

    case "red":
      btnColor = "btnRed";
      break;
  }
  
  return (
    <Link
      className={`${classes.doneBtn} ${btnColor} rounded-full`}
      to="/"
      onClick={onUpdateTask}
    >
      <img className={classes.doneImg} src={DoneImg} alt="done" />
    </Link>
  );
}
