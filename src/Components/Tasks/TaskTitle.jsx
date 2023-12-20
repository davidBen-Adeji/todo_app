import { Link } from "react-router-dom";

import classes from "./TaskTitle.module.css";

export default function TaskTitle({
  isChecked,
  inputId,
  path,
  onChangeIndex,
  children,
}) {
  let checkboxColor = "checkboxRed";
  let spanColor = "spanRed";
  let linkColor = "textRed";

  return (
    <div className={`itemGroup`}>
      <label
        htmlFor={inputId}
        className={`checkbox ${checkboxColor} rounded-full`}
      >
        <span className={`${isChecked ? "span" : ""} ${spanColor}`}></span>
      </label>
      <Link
        to={path}
        onClick={onChangeIndex}
        className={`${classes.link} ${linkColor} ${isChecked ? classes.taskTitleLinkClicked : ""}`}
      >
        {children}
      </Link>
    </div>
  );
}
