import { addTaskItemHandler, inputChangeHandler } from "../../util/functions";
import AddImg from "../../assets/svg/add.svg";

import classes from "./Form.module.css";

export default function Form({
  id,
  taskItem,
  setCheckedState,
  setTaskItem,
  setTaskItems,
  setTaskTitle,
  themeColor,
}) {
  let btnColor = "btnGreen";
  let textColor = "";

  switch (themeColor) {
    case "blue":
      textColor = "textBlue";
      btnColor = "btnBlue";
      break;

    case "orange":
      textColor = "textOrange";
      btnColor = "btnOrange";
      break;

    case "red":
      textColor = "textRed";
      btnColor = "btnRed";
      break;
  }

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
          id
        )
      }
      className={`${classes.form} shadow-lg rounded-full`}
    >
      <div className={classes.inputGroup}>
        <input
          className={`${classes.inputGroupText} ${textColor} rounded-full`}
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
          className={`${classes.inputGroupBtn} ${btnColor} rounded-full`}
          type="submit"
        >
          <img src={AddImg} className={classes.inputGroupImg} alt="add item" />
        </button>
      </div>
    </form>
  );
}
