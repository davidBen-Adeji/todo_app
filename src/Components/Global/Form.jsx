import { addTaskItemHandler, inputChangeHandler } from "../../util/functions";
import AddImg from "../../assets/svg/add.svg";

export default function Form({
  id,
  taskItem,
  setCheckedState,
  setTaskItem,
  setTaskItems,
  setTaskTitle,
}) {
  return (
    <form
      action=""
      onSubmit={(event) =>
        addTaskItemHandler(event, taskItem, setTaskItems, setTaskItem, setCheckedState, id)
      }
      className="relative w-[65%] shadow-lg rounded-full"
    >
      <div className="flex items-end mt-10">
        <input
          className=" bg-white w-[80%] py-2 px-3 capitalize outline-none rounded-full"
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
        <button className="absolute bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 h-[100%] w-[20%] right-0 flex justify-center items-center rounded-full" type="submit">
          <img src={AddImg} className="w-[50%] h-[50%]" alt="add item" />
        </button>
      </div>
    </form>
  );
}
