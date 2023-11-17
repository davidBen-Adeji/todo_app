import { useState } from "react";
import { Link } from "react-router-dom";
import BinImg from "../../assets/svg/bin.svg";
import DoneImg from "../../assets/svg/done.svg";

export default function ViewedTask({ task, onUpdateTask }) {
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [taskItems, setTaskItems] = useState(task.taskItems);
  const [taskItem, setTaskItem] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(taskItems.length).fill(false)
  );

  const updatedTask = {
    taskTitle: taskTitle || "unnamed task",
    taskItems,
    id: task.id,
  };

  function inputChangeHandler(inputName, value) {
    if (inputName === "taskTitle") {
      setTaskTitle(value);
    } else if (inputName === "taskItem") {
      setTaskItem(value);
    }
  }

  function toggleCheckedHandler(index) {
    setCheckedState((prevState) => {
      const state = [...prevState];
      state[index] = !state[index];
      return state;
    });
  }

  function addTaskItemsHandler(event, taskItem) {
    event.preventDefault();
    if (taskItem) {
      setTaskItems((prevItems) => [...prevItems, taskItem]);
      setTaskItem("");
    }
  }

  function deleteItemHandler(index) {
    setTaskItems((prevItems) => {
      const updatedTaskItems = [...prevItems];
      updatedTaskItems.splice(index, 1);
      return updatedTaskItems;
    });
  }

  return (
    <>
      <div className=" mt-4 mb-8">
        <input
          className=" bg-[#F5F5F5] w-[75%] border-b border-black py-2 px-1 capitalize outline-none text-3xl"
          type="text"
          value={taskTitle}
          placeholder="Add title here"
          onChange={(event) =>
            inputChangeHandler("taskTitle", event.target.value)
          }
        />
      </div>
      <ul>
        {taskItems.map((taskItem, index) => {
          const inputId = `checkbox_${Math.random()}`;
          let linkClass = "capitalize";
          let spanClass = "";
          if (checkedState[index]) {
            linkClass += " opacity-50";
            spanClass =
              "block w-[70%] h-[70%] bg-black rounded-full cursor-pointer";
          }
          return (
            <li
              className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full"
              key={`${taskItem}_${Math.random()}`}
            >
              <input
                className="absolute opacity-0"
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => toggleCheckedHandler(index)}
                id={inputId}
              />{" "}
              <div className="flex items-center gap-5">
                <label
                  htmlFor={inputId}
                  className="flex justify-center items-center w-5 h-5 border-black border rounded-full cursor-pointer hover:opacity-80"
                >
                  <span className={spanClass}></span>
                </label>
                <Link to="" className={linkClass}>
                  {taskItem}
                </Link>
              </div>
              <button
                className="hover:opacity-80"
                type="button"
                onClick={() => deleteItemHandler(index)}
              >
                <img className="w-6 h-6" src={BinImg} alt="bin" />
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <form
          action=""
          onSubmit={(event) => addTaskItemsHandler(event, taskItem)}
        >
          <div className="flex items-end mt-10">
            <input
              className=" bg-[#F5F5F5] w-[50%] border-b border-black py-2 px-1 capitalize outline-none"
              type="text"
              value={taskItem}
              placeholder="Add items here"
              onChange={(event) =>
                inputChangeHandler("taskItem", event.target.value)
              }
            />
            <button className=" text-2xl hover:opacity-80" type="submit">
              +
            </button>
          </div>
        </form>
      </div>
      {/* <Link to="/" onClick={() => onDeleteTask(updatedTask)}>
        delete
      </Link> */}
      {/* <Link to="/">Home</Link> */}
      <Link
        className="absolute right-7 bottom-6 flex justify-center items-center bg-[#d9d9d9] w-14 h-14 rounded-full text-5xl hover:opacity-80"
        to="/"
        onClick={() => onUpdateTask(updatedTask)}
      >
        <img className="w-9 h-9" src={DoneImg} alt="done" />
      </Link>
    </>
  );
}
