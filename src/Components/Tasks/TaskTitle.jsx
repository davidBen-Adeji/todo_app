import { Link } from "react-router-dom";

import classes from "./TaskTitle.module.css";

export default function TaskTitle({
  isChecked,
  inputId,
  path,
  onChangeIndex,
  children,
}) {

  return (
    <div className={`itemGroup`}>
      <label
        htmlFor={inputId}
        className={`checkbox customCheckbox rounded-full`}
      >
        <span className={`${isChecked ? "span" : ""} customSpan`}></span>
      </label>
      <Link
        to={path}
        onClick={onChangeIndex}
        className={`${classes.link} ${
          isChecked ? classes.taskTitleLinkClicked : ""
        } text`}
      >
        {children}
      </Link>
    </div>
  );
}
