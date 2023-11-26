import { useState } from "react";
import { Link } from "react-router-dom";
import DoneImg from "../../assets/svg/done.svg";
import CancelImg from "../../assets/svg/cancel.svg"
import TaskTitleInput from "../Global/TaskTitleInput";
import TaskItems from "../Global/TaskItems";
import Form from "../Global/Form";
import { removeNewId } from "../../util/functions";

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
      <div className="absolute w-14 right-8 bottom-14 lappy:right-16 lappy:bottom-7 flex flex-col justify-center items-center gap-4">
        <Link to="/" className="bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-7 h-7 rounded-full" onClick={removeNewId}>
        <img src={CancelImg} alt="cancel" />
        </Link>
      <Link
        className="bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-12 h-12 rounded-full"
        to="/"
        onClick={() => onUpdateTask(updatedTask)}
      >
        <img className="w-9 h-9" src={DoneImg} alt="done" />
      </Link>
      </div>
    </>
  );
}
