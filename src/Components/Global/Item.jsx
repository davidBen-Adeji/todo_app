import { toggleCheckBoxHandler } from "../../util/functions";

import classes from "./Item.module.css";

export default function Item({
  id,
  index,
  item,
  checkedState,
  setCheckedState,
  themeColor,
}) {
  let checkboxColor = "checkboxGreen";
  let spanColor = "spanGreen";
  let labelColor = "";

  switch (themeColor) {
    case "blue":
      checkboxColor = "checkboxBlue";
      spanColor = "spanBlue";
      labelColor = "textBlue";
      break;

    case "orange":
      checkboxColor = "checkboxOrange";
      spanColor = "spanOrange";
      labelColor = "textOrange";
      break;

    case "red":
      checkboxColor = "checkboxRed";
      spanColor = "spanRed";
      labelColor = "textRed";
      break;
  }

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
        className={`checkbox ${checkboxColor} rounded-full`}
      >
        <span className={`${checkedState ? "span" : ""} ${spanColor}`}></span>
      </label>
      <label
        htmlFor={inputId}
        className={`${classes.itemText} ${labelColor} ${
          checkedState ? classes.itemClicked : "opacity-100"
        }`}
      >
        {item}
      </label>
    </div>
  );
}
