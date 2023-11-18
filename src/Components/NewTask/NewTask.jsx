import { useState } from "react";
import { Link } from "react-router-dom";
import BinImg from "../../assets/svg/bin.svg";
import DoneImg from "../../assets/svg/done.svg";
import {
  inputChangeHandler,
  toggleCheckBoxHandler,
  addTaskItemHandler,
  deleteTaskItemHandler,
} from "../../util/functions.js";
import TaskTitle from "../Global/TaskTitle.jsx";

export default function NewTask({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(taskItems.length).fill(false)
  );
  const id = JSON.parse(localStorage.getItem("newId")) || `${Math.random()}_${Math.random()}`
  localStorage.setItem("newId", JSON.stringify(id))

  const task = {
    taskTitle: taskTitle || "Unamed Task",
    taskItems,
    id,
  };

  console.log(task.id);

  return (
    <>
      <TaskTitle
        title={taskTitle}
        setTaskTitle={setTaskTitle}
        setTaskItem={setTaskItem}
      />
      <ul>
        {task.taskItems.map((item, index) => {
          let linkClass = "capitalize";
          let spanClass = "";

          if (checkedState[index]) {
            linkClass += " opacity-50";
            spanClass =
              "block w-[70%] h-[70%] bg-black rounded-full cursor-pointer";
          }

          const inputId = `checkbox_${Math.random()}`;
          return (
            <li
              className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full"
              key={`${item}_${Math.random()}`}
            >
              <div className="flex items-center gap-5">
                <input
                  className="absolute opacity-0"
                  type="checkbox"
                  checked={checkedState[index]}
                  onChange={() => toggleCheckBoxHandler(index, setCheckedState, task.id)}
                  id={inputId}
                />{" "}
                <label
                  htmlFor={inputId}
                  className="flex justify-center items-center w-5 h-5 border-black border rounded-full cursor-pointer"
                >
                  <span className={spanClass}></span>
                </label>
                <Link to="" className={linkClass}>
                  {item}
                </Link>
              </div>
              <button
                type="button"
                onClick={() => deleteTaskItemHandler(index, task.id, setTaskItems, setCheckedState)}
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
          onSubmit={(event) =>
            addTaskItemHandler(event, taskItem, setTaskItems, setTaskItem)
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
      </div>
      <Link
        className="absolute right-7 bottom-6 flex justify-center items-center bg-[#d9d9d9] w-14 h-14 rounded-full text-5xl"
        to="/"
        onClick={() => onAddTask(task)}
      >
        <img className="w-9 h-9" src={DoneImg} alt="done" />
      </Link>
    </>
  );
}
