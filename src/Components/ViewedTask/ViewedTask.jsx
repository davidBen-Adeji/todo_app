import { useState } from "react";
import TaskTitleInput from "../Global/TaskTitleInput";
import TaskItems from "../Global/TaskItems";
import Form from "../Global/Form";
import DoneButton from "./DoneButton";

export default function ViewedTask({ task, onUpdateTask, themeColor }) {
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [taskItems, setTaskItems] = useState(
    JSON.parse(localStorage.getItem(`${task.id}_items`)) || task.taskItems
  );
  const [taskItem, setTaskItem] = useState("");
  const [checkedState, setCheckedState] = useState(
    JSON.parse(localStorage.getItem(`${task.id}_checkedState`)) ||
      new Array(taskItems.length).fill(false)
  );
  const [isInputFieldEmpty, setIsInputFieldEmpty] = useState(false);

  const updatedTask = {
    taskTitle: taskTitle.trim(),
    taskItems,
    id: task.id,
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
      <DoneButton
        onUpdateTask={() => onUpdateTask(updatedTask)}
        taskTitle={taskTitle.trim()}
        setIsInputFieldEmpty={setIsInputFieldEmpty}
      />
    </>
  );
}
