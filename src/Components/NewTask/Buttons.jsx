import CancelImg from "../../assets/svg/cancel.svg";
import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";
import { removeNewId } from "../../util/functions";

import classes from "./Buttons.module.css";

export default function Buttons({
  taskTitle,
  setIsInputFieldEmpty,
  onAddTask,
}) {
  return (
    <div className={classes.buttons}>
      <Link
        to="/"
        className={`${classes.button} ${classes.cancel} btn rounded-full`}
        onClick={removeNewId}
      >
        <img src={CancelImg} alt="cancel" />
      </Link>
      <Link
        className={`${classes.button} ${classes.done} btn rounded-full`}
        to={`${taskTitle ? "/" : ""}`}
        onClick={
          taskTitle
            ? onAddTask
            : () => {
                setIsInputFieldEmpty(true);
                setTimeout(() => {
                  setIsInputFieldEmpty(false);
                }, 500);
              }
        }
      >
        <img className={classes.doneImg} src={DoneImg} alt="done" />
      </Link>
    </div>
  );
}
