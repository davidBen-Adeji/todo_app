import CancelImg from "../../assets/svg/cancel.svg";
import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";
import { removeNewId } from "../../util/functions";

import classes from "./Buttons.module.css";

export default function Buttons({ onAddTask }) {
  let bgColor = classes.bgBlue;
  
  return (
    <div className={classes.buttons}>
      <Link
        to="/"
        className={`${bgColor} ${classes.cancel} rounded-full`}
        onClick={removeNewId}
      >
        <img src={CancelImg} alt="cancel" />
      </Link>
      <Link
        className={`${bgColor} ${classes.done} rounded-full`}
        to="/"
        onClick={onAddTask}
      >
        <img className={classes.doneImg} src={DoneImg} alt="done" />
      </Link>
    </div>
  );
}
