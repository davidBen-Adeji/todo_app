import { Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import NewTask from "./NewTask.jsx";
import Bin from "./Bin.jsx";
import { useState } from "react";
import { INITIAL_TASKS } from "./INITIAL_TASKS.js";
import ViewedTask from "./ViewedTask.jsx";

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
    localStorage.setItem("item", JSON.stringify(index));
    setIndex(index);
  }

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                onChangeIndex={changeIndexHandler}
                onDeleteTask={deleteTaskHandler}
              />
            }
          />
          <Route
            path="/newTask"
            element={<NewTask onAddTask={addTaskHandler} />}
          />
          <Route
            path="/task"
            element={
              <ViewedTask
                task={tasks[index]}
                onUpdateTask={updateTaskHandler}
                onDeleteTask={deleteTaskHandler}
              />
            }
          />
          <Route
            path="/bin"
            element={
              <Bin
                bin={bin}
                onDeletePermanently={permanentDeleteHandler}
                onRestoreTask={restoreTaskHandler}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
