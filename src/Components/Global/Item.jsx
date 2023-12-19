import { toggleCheckBoxHandler } from "../../util/functions";

import classes from "./Item.module.css";

export default function Item({
  id,
  index,
  item,
  checkedState,
  setCheckedState,
}) {
  let clickedLabelClass = "opacity-100";
  let checkboxColor = classes.checkboxBlue;
  let spanColor = classes.spanBlue;
  let labelColor = classes.labelBlue;

  if (checkedState) {
    clickedLabelClass = classes.taskItemLabelClicked;
  }

  const inputId = `checkbox_${Math.random()}`;

  return (
    <div className={classes.taskItemGroup}>
      <input
        className={classes.taskItemInput}
        type="checkbox"
        checked={checkedState}
        onChange={() => toggleCheckBoxHandler(index, setCheckedState, id)}
        id={inputId}
      />{" "}
      <label
        htmlFor={inputId}
        className={`${classes.taskItemCustomCheckbox} ${checkboxColor} rounded-full`}
      >
        <span
          className={`${checkedState ? classes.taskItemSpan : ""} ${spanColor}`}
        ></span>
      </label>
      <label
        htmlFor={inputId}
        className={`${classes.taskItemLabel} ${labelColor} ${clickedLabelClass}`}
      >
        {item}
      </label>
    </div>
  );
}
