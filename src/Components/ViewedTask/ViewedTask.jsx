import { useState } from "react";
import { Link } from "react-router-dom";
import DoneImg from "../../assets/svg/done.svg";
import TaskTitleInput from "../Global/TaskTitleInput";
import TaskItems from "../Global/TaskItems";
import Form from "../Global/Form";

export default function ViewedTask({ task, onUpdateTask }) {
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [taskItems, setTaskItems] = useState(
    JSON.parse(localStorage.getItem(`${task.id}_items`)) || task.taskItems
  );
  const [taskItem, setTaskItem] = useState("");
  const [checkedState, setCheckedState] = useState(
    JSON.parse(localStorage.getItem(`${task.id}_checkedState`)) ||
      new Array(taskItems.length).fill(false)
  );
  const updatedTask = {
    taskTitle: taskTitle || "unnamed task",
    taskItems,
    id: task.id,
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
        taskItems={updatedTask.taskItems}
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
        className="absolute right-7 bottom-6 flex justify-center items-center bg-[#d9d9d9] w-14 h-14 rounded-full text-5xl hover:opacity-80"
        to="/"
        onClick={() => onUpdateTask(updatedTask)}
      >
        <img className="w-9 h-9" src={DoneImg} alt="done" />
      </Link>
    </>
  );
}
