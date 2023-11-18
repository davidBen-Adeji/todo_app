import { useState } from "react";
import Task from "./Task.jsx";
import Header from "./Header.jsx";
import NewTaskButton from "./NewTaskButton.jsx";

export default function Tasks({ tasks, onChangeIndex, onDeleteTask }) {
  const [checkedState, setCheckedState] = useState(
    JSON.parse(localStorage.getItem("tasksCheckedState")) ||
      new Array(tasks.length).fill(false)
  );

 function toggleCheckBoxHandler(index, setCheckedState) {
  setCheckedState((prevState) => {
    const newState = [...prevState];
    newState[index] = !newState[index];
      localStorage.setItem("tasksCheckedState", JSON.stringify(newState));
    return newState;
  });
}

  const taskComponent = tasks.map((task, index) => (
    <Task
      to="/task"
      key={task.id}
      isChecked={checkedState[index]}
      onToggleCheckBox={() => toggleCheckBoxHandler(index, setCheckedState)}
      onChangeIndex={() => onChangeIndex(index)}
      onDeleteTask={() => onDeleteTask(task, index, setCheckedState)}
    >
      {task.taskTitle}
    </Task>
  ));

  return (
    <>
      <Header />
      <ul>{taskComponent}</ul>
      <NewTaskButton />
    </>
  );
}
