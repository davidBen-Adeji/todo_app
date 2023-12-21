import { toggleCheckBoxHandler } from "../../util/functions";

import classes from "./Item.module.css";

export default function Item({
  id,
  index,
  item,
  checkedState,
  setCheckedState,
}) {
  const inputId = `checkbox_${Math.random()}`;

  return (
    <div className={`itemGroup`}>
      <input
        className={`checkbox-0`}
        type="checkbox"
        checked={checkedState}
        onChange={() => toggleCheckBoxHandler(index, setCheckedState, id)}
        id={inputId}
      />{" "}
      <label
        htmlFor={inputId}
        className={`checkbox customCheckbox rounded-full`}
      >
        <span className={`${checkedState ? "span" : ""} customSpan`}></span>
      </label>
      <label
        htmlFor={inputId}
        className={`${classes.itemText}  
        ${checkedState ? classes.itemClicked : "opacity-100"} text`}
      >
        {item}
      </label>
    </div>
  );
}
