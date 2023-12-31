import { addTaskItemHandler, inputChangeHandler } from "../../util/functions";
import AddImg from "../../assets/svg/add.svg";

import classes from "./Form.module.css";
import { useState } from "react";

export default function Form({
  id,
  taskItem,
  setCheckedState,
  setTaskItem,
  setTaskItems,
  setTaskTitle,
}) {
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false);

  return (
    <form
      action=""
      onSubmit={(event) =>
        addTaskItemHandler(
          event,
          taskItem,
          setTaskItems,
          setTaskItem,
          setCheckedState,
          setIsInputFieldEmpty,
          id
        )
      }
      className={`${classes.form} 
      ${isInputFieldEmpty ? "shaking-element" : ""} shadow-lg rounded-full`}
    >
      <div className={classes.inputGroup}>
        <input
          className={`${classes.inputGroupText} text rounded-full`}
          type="text"
          value={taskItem}
          placeholder="Add items here"
          onChange={(event) =>
            inputChangeHandler(
              "taskItem",
              event.target.value,
              setTaskTitle,
              setTaskItem
            )
          }
        />
        <button
          className={`${classes.inputGroupBtn} btn rounded-full`}
          type="submit"
        >
          <img src={AddImg} className={classes.inputGroupImg} alt="add item" />
        </button>
      </div>
    </form>
  );
}
