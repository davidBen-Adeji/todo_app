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
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false);

  const id =
    JSON.parse(localStorage.getItem("newId")) ||
    `${Math.random()}_${Math.random()}`;
  localStorage.setItem("newId", JSON.stringify(id));

  const task = {
    taskTitle: taskTitle.trim(),
    taskItems,
    id,
  };

  return (
    <>
      <TaskTitleInput
        title={taskTitle}
        setTaskTitle={setTaskTitle}
        setTaskItem={setTaskItem}
        isInputFieldEmpty={isInputFieldEmpty}
      />
      <TaskItems
        id={task.id}
        taskItems={taskItems}
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
      />

      <Buttons taskTitle={taskTitle.trim()} setIsInputFieldEmpty={setIsInputFieldEmpty} onAddTask={() => onAddTask(task)} />
    </>
  );
}
