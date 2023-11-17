import { useState } from "react";
import { Link } from "react-router-dom";
import Task from "./Task.jsx";
import TaskImg from "../../assets/svg/task.svg";

export default function Tasks({ tasks, onChangeIndex, onDeleteTask }) {
  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  function toggleCheckHandler(index) {
    setCheckedState((prevState) => {
      const state = [...prevState];
      state[index] = !state[index];
      return state;
    });
  }

  const taskComponent = tasks.map((task, index) => {
    return (
      <Task
        to="/task"
        key={task.id}
        isChecked={checkedState[index]}
        onToggleCheck={() => toggleCheckHandler(index)}
        onChangeIndex={() => onChangeIndex(index)}
        onDeleteTask={() => onDeleteTask(task)}
      >
        {task.taskTitle}
      </Task>
    );
  });
  return (
    <>
      <div className="flex items-center mt-5 mb-8 gap-2">
        <img className="w-18 h-18" src={TaskImg} alt="task" />
        <h1 className="text-3xl">Tasks</h1>
      </div>
      <ul>{taskComponent}</ul>
      <Link
        className="absolute right-7 bottom-6 flex justify-center bg-[#d9d9d9] w-14 h-14 rounded-full text-5xl"
        to="/newTask"
      >
        <span>+</span>
      </Link>
    </>
  );
}
