import { useState } from "react";
import { INITIAL_TASKS } from "./INITIAL_TASKS.js";
import RoutesComponent from './RoutesComponent.jsx'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || INITIAL_TASKS
  );
  const [index, setIndex] = useState(
    JSON.parse(localStorage.getItem("index")) || 0
  );
  const [bin, setBin] = useState(JSON.parse(localStorage.getItem("bin")) || []);

  function addTaskHandler(task) {
    setTasks((prevTasks) => {
      localStorage.setItem("tasks", JSON.stringify([...prevTasks, task]));
      return [...prevTasks, task];
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

  function deleteTaskHandler(task) {
    setBin((prevBin) => {
      localStorage.setItem("bin", JSON.stringify([...prevBin, task]));
      return [...prevBin, task];
    });

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter(
        (prevTask) => prevTask.id !== task.id
      );
      console.log(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  }

  function permanentDeleteHandler(task) {
    setBin((prevBin) => {
      const updatedBin = prevBin.filter((binItem) => binItem.id !== task.id);
      localStorage.setItem("bin", JSON.stringify(updatedBin));
      return updatedBin;
    });
  }

  function restoreTaskHandler(task) {
    setTasks((prevTasks) => {
      localStorage.setItem("bin", JSON.stringify([...prevTasks, task]));
      return [...prevTasks, task];
    });

    setBin((prevBin) => {
      const updatedBin = prevBin.filter((binItem) => binItem.id !== task.id);
      localStorage.setItem("bin", JSON.stringify(updatedBin));
      return updatedBin;
    });
  }

  function changeIndexHandler(index) {
    localStorage.setItem("index", JSON.stringify(index));
    setIndex(index);
  }

  return (
    <>
    <RoutesComponent
      task={tasks[index]}
      tasks={tasks}
      bin={bin}
      onChangeIndex={changeIndexHandler}
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
      onUpdateTask={updateTaskHandler}
      onRestoreTask={restoreTaskHandler}
      onDeletePermanently={permanentDeleteHandler}
    />
    </>
  );
}

export default App;
