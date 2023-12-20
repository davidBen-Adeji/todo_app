import { inputChangeHandler } from "../../util/functions";

import classes from "./TaskTitleInput.module.css";

export default function TaskTitleInput({ title, setTaskTitle, setTaskItem, themeColor }) {
  let inputTextColor = classes.inputGreen;

  switch (themeColor) {
    case "blue":
      inputTextColor = classes.inputBlue
      break;

    case "orange":
      inputTextColor = classes.inputOrange
      break;

    case "red":
      inputTextColor = classes.inputRed
      break;
  }

  return (
    <div className={classes.taskTitleInput}>
      <input
        className={`${classes.taskTitleInputText} ${inputTextColor} shadow-md rounded-full`}
        type="text"
        value={title}
        placeholder="Add title here"
        onChange={(event) =>
          inputChangeHandler(
            "taskTitle",
            event.target.value,
            setTaskTitle,
            setTaskItem
          )
        }
      />
    </div>
  );
}
