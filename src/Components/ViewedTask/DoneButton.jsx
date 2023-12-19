import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";

import classes from "./DoneButton.module.css";

export default function DoneButton({ onUpdateTask }) {
  let btnColor = classes.btnOrange;
  
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
