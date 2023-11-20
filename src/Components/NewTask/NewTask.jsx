import { useState } from "react";
import { Link } from "react-router-dom";
import DoneImg from "../../assets/svg/done.svg";
import TaskTitleInput from "../Global/TaskTitleInput.jsx";
import TaskItems from "../Global/TaskItems.jsx";
import Form from "../Global/Form.jsx";

export default function NewTask({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(taskItems.length).fill(false)
  );
  const id =
    JSON.parse(localStorage.getItem("newId")) ||
    `${Math.random()}_${Math.random()}`;
  localStorage.setItem("newId", JSON.stringify(id));

  const task = {
    taskTitle: taskTitle || "Unnamed Task",
    taskItems,
    id,
  };

  return (
    <>
      <TaskTitleInput
        title={taskTitle}
        setTaskTitle={setTaskTitle}
        setTaskItem={setTaskItem}
      />
      <TaskItems
        id={task.id}
        taskItems={task.taskItems}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
        setTaskItems={setTaskItems}
      />

      <Form
        id={task.id}
        taskItem={taskItem}
        setCheckedState={setCheckedState}
        setTaskItem={setTaskItem}
        setTaskItems={setTaskItems}
        setTaskTitle={setTaskTitle}
      />
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
