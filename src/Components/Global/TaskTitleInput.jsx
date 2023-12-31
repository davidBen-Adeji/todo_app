import { inputChangeHandler } from "../../util/functions";

import classes from "./TaskTitleInput.module.css";

export default function TaskTitleInput({
  title,
  setTaskTitle,
  setTaskItem,
  isInputFieldEmpty,
}) {
  return (
    <div className={classes.taskTitleInput}>
      <input
        className={`${classes.taskTitleInputText} 
        ${isInputFieldEmpty ? "shaking-element" : ""} 
        taskTitleInputBorder shadow-md rounded-full`}
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
