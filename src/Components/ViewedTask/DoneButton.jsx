import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";

import classes from "./DoneButton.module.css";

export default function DoneButton({
  onUpdateTask,
  taskTitle,
  setIsInputFieldEmpty,
}) {
  return (
    <Link
      className={`${classes.doneBtn} btn rounded-full`}
      to={`${taskTitle ? "/" : ""}`}
      onClick={
        taskTitle
            ? onUpdateTask
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
  );
}
