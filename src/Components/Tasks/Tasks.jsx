import { useState } from "react";
import TaskImg from "../../assets/svg/task.svg";
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

  let taskComponent = (
    <img
      src={TaskImg}
      alt="task image"
      className="opacity-50 w-1/2 h-1/2 m-auto mt-28"
    />
  );

  if (tasks.length > 0) {
    taskComponent = (
      <ul>
        {tasks.map((task, index) => (
          <Task
            to="/task"
            key={task.id}
            isChecked={checkedState[index]}
            onToggleCheckBox={() =>
              toggleCheckBoxHandler(index, setCheckedState)
            }
            onChangeIndex={() => onChangeIndex(index)}
            onDeleteTask={() => onDeleteTask(task, index, setCheckedState)}
          >
            {task.taskTitle}
          </Task>
        ))}
      </ul>
    );
  }
  return (
    <>
      <Header />
      {taskComponent}
      <NewTaskButton />
    </>
  );
}
