import { addTaskItemHandler, inputChangeHandler } from "../../util/functions";

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
    >
      <div className="flex items-end mt-10">
        <input
          className=" bg-[#F5F5F5] w-[50%] border-b border-black py-2 px-1 capitalize outline-none"
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
        <button className=" text-2xl" type="submit">
          +
        </button>
      </div>
    </form>
  );
}
