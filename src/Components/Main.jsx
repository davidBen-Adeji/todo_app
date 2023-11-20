import { useState } from "react";
import { INITIAL_TASKS } from "../util/INITIAL_TASKS";
import RoutesComponent from "./RoutesComponent.jsx";

export default function Main() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || INITIAL_TASKS
  );
  const [checkedState, setCheckedState] = useState(
    JSON.parse(localStorage.getItem("tasksCheckedState")) ||
      new Array(tasks.length).fill(false)
  );
  const [index, setIndex] = useState(
    JSON.parse(localStorage.getItem("index")) || 0
  );
  const [bin, setBin] = useState(JSON.parse(localStorage.getItem("bin")) || []);

  function toggleCheckBoxHandler(index) {
    setCheckedState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      localStorage.setItem("tasksCheckedState", JSON.stringify(newState));
      return newState;
    });
  }

  function addTaskHandler(task) {
    setTasks((prevTasks) => {
      localStorage.setItem("tasks", JSON.stringify([task, ...prevTasks]));
      return [task, ...prevTasks];
    });
    setCheckedState((prevState) => {
      localStorage.setItem(
        "tasksCheckedState",
        JSON.stringify([false, ...prevState])
      );
      return [false, ...prevState];
    });
  }

  function updateTaskHandler(updatedTask) {
    setTasks((prevTasks) => {
      const tasks = [...prevTasks];
      tasks[index] = { ...updatedTask };
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    });
  }

  function deleteTaskHandler(task, index) {
    setBin((prevBin) => {
      localStorage.setItem("bin", JSON.stringify([task, ...prevBin]));
      return [task, ...prevBin];
    });

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    setCheckedState((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1);
      localStorage.setItem("tasksCheckedState", JSON.stringify(newState));
      return newState;
    });
  }

  function permanentDeleteHandler(task, index) {
    localStorage.removeItem(`${task.id}_items`);
    localStorage.removeItem(`${task.id}_checkedState`);
    setBin((prevBin) => {
      const updatedBin = [...prevBin];
      updatedBin.splice(index, 1);
      localStorage.setItem("bin", JSON.stringify(updatedBin));
      return updatedBin;
    });
  }

  function restoreTaskHandler(task, index) {
    setTasks((prevTasks) => {
      localStorage.setItem("bin", JSON.stringify([task, ...prevTasks]));
      return [task, ...prevTasks];
    });

    setBin((prevBin) => {
      const updatedBin = [...prevBin];
      updatedBin.splice(index, 1);
      localStorage.setItem("bin", JSON.stringify(updatedBin));
      return updatedBin;
    });
  }

  function changeIndexHandler(index) {
    localStorage.setItem("index", JSON.stringify(index));
    setIndex(index);
  }
  return (
    <main className="bg-[#F5F5F5] relative px-7 pb-1">
      <RoutesComponent
        task={tasks[index]}
        tasks={tasks}
        checkedState={checkedState}
        bin={bin}
        onChangeIndex={changeIndexHandler}
        onAddTask={addTaskHandler}
        onDeleteTask={deleteTaskHandler}
        onUpdateTask={updateTaskHandler}
        onRestoreTask={restoreTaskHandler}
        onDeletePermanently={permanentDeleteHandler}
        onToggleCheckBox={toggleCheckBoxHandler}
      />
    </main>
  );
}
