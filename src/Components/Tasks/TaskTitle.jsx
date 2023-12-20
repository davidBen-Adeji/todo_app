import { Link } from "react-router-dom";

import classes from "./TaskTitle.module.css";

export default function TaskTitle({
  isChecked,
  inputId,
  path,
  onChangeIndex,
  children,
  themeColor,
}) {
  let checkboxColor = "checkboxGreen";
  let spanColor = "spanGreen";
  let linkColor = "";

  switch (themeColor) {
    case "blue":
      checkboxColor = "checkboxBlue";
      spanColor = "spanBlue";
      linkColor = "textBlue";
      break;

    case "orange":
      checkboxColor = "checkboxOrange";
      spanColor = "spanOrange";
      linkColor = "textOrange";
      break;

    case "red":
      checkboxColor = "checkboxRed";
      spanColor = "spanRed";
      linkColor = "textRed";
      break;
  }

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
        className={`${classes.link} ${linkColor} ${
          isChecked ? classes.taskTitleLinkClicked : ""
        }`}
      >
        {children}
      </Link>
    </div>
  );
}
