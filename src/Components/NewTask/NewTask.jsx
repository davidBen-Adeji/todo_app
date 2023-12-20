import { useState } from "react";
import TaskTitleInput from "../Global/TaskTitleInput.jsx";
import TaskItems from "../Global/TaskItems.jsx";
import Form from "../Global/Form.jsx";
import Buttons from "./Buttons.jsx";

export default function NewTask({ onAddTask, themeColor }) {
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
        themeColor={themeColor}
      />
      <TaskItems
        id={task.id}
        taskItems={task.taskItems}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
        setTaskItems={setTaskItems}
        themeColor={themeColor}
      />

      <Form
        id={task.id}
        taskItem={taskItem}
        setCheckedState={setCheckedState}
        setTaskItem={setTaskItem}
        setTaskItems={setTaskItems}
        setTaskTitle={setTaskTitle}
        themeColor={themeColor}
      />

      <Buttons onAddTask={() => onAddTask(task)} themeColor={themeColor} />
    </>
  );
}
