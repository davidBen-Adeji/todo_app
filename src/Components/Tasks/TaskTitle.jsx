import { Link } from "react-router-dom";

import classes from "./TaskTitle.module.css";

export default function TaskTitle({
  isChecked,
  inputId,
  path,
  onChangeIndex,
  children,
}) {

  let checkboxColor = classes.checkboxGreen;
  let spanColor = classes.spanGreen;

  return (
    <div className={classes.taskTitle}>
      <label
        htmlFor={inputId}
        className={`${classes.taskTitleCheckbox} ${checkboxColor} rounded-full`}
      >
        <span className={`${isChecked ? classes.taskTitleSpan : ""} ${spanColor}`}></span>
      </label>
      <Link
        to={path}
        onClick={onChangeIndex}
        className={`${classes.taskTitleLink} ${isChecked ? classes.taskTitleLinkClicked : ""}`}
      >
        {children}
      </Link>
    </div>
  );
}
