import { useState } from "react";
import Task from "./Task.jsx";
import Header from "./Header.jsx";
import NewTaskButton from "./NewTaskButton.jsx";
import { toggleCheckBoxHandler } from "../../util/functions.js";

export default function Tasks({ tasks, onChangeIndex, onDeleteTask }) {
  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  const taskComponent = tasks.map((task, index) => {
    return (
      <Task
        to="/task"
        key={task.id}
        isChecked={checkedState[index]}
        onToggleCheckBox={() => toggleCheckBoxHandler(index, setCheckedState)}
        onChangeIndex={() => onChangeIndex(index)}
        onDeleteTask={() => onDeleteTask(task)}
      >
        {task.taskTitle}
      </Task>
    );
  });
  return (
    <>
      <Header />
      <ul>{taskComponent}</ul>
      <NewTaskButton />
    </>
  );
}
