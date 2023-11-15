import { Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import NewTask from "./NewTask.jsx";
import Bin from "./Bin.jsx";
import { useState } from "react";
import { INITIAL_TASKS } from "./INITIAL_TASKS.js";
import ViewedTask from "./ViewedTask.jsx";

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [index, setIndex] = useState(0);
  const [bin, setBin] = useState([]);
  
  function addTaskHandler(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function updateTaskHandler(updatedTask) {
    setTasks((prevTasks) => {
      const tasks = [...prevTasks];
      tasks[index] = { ...updatedTask };
      return tasks;
    });
  }

  function deleteTaskHandler(task) {
    setBin((prevBin) => [...prevBin, task]);
    setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== task.id)
    );
  }

  function permanentDeleteHandler(task) {
    setBin((prevBin) => prevBin.filter((binItem) => binItem.id !== task.id));
  }

  function restoreTaskHandler(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
    setBin((prevBin) => prevBin.filter((binItem) => binItem.id !== task.id));
  }

  function changeIndexHandler(index) {
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
