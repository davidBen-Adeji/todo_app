import { useState } from "react";
import { Link } from "react-router-dom";
import DoneImg from "../../assets/svg/done.svg";
import CancelImg from "../../assets/svg/cancel.svg";
import TaskTitleInput from "../Global/TaskTitleInput.jsx";
import TaskItems from "../Global/TaskItems.jsx";
import Form from "../Global/Form.jsx";
import { removeNewId } from "../../util/functions.js";

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

      <div className="absolute w-14 right-8 bottom-14 lappy:right-16 lappy:bottom-7 flex flex-col justify-center items-center gap-4">
        <Link to="/" className="bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-7 h-7 rounded-full" onClick={removeNewId}>
        <img src={CancelImg} alt="cancel" />
        </Link>
        <Link
          className="bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-12 h-12 rounded-full"
          to="/"
          onClick={() => onAddTask(task)}
        >
          <img className="w-9 h-9" src={DoneImg} alt="done" />
        </Link>
      </div>
    </>
  );
}
