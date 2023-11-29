import { useState } from "react";
import TaskTitleInput from "../Global/TaskTitleInput";
import TaskItems from "../Global/TaskItems";
import Form from "../Global/Form";
import DoneButton from "./DoneButton";

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

      <DoneButton onUpdateTask={() => onUpdateTask(updatedTask)} />
    </>
  );
}
