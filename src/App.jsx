import { Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import NewTask from "./NewTask.jsx";
import CompletedTasks from "./CompletedTasks.jsx";
import { useState } from "react";
import { INITIAL_TASKS } from "./INITIAL_TASKS.js";
import ViewedTask from "./ViewedTask.jsx";

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [index, setIndex] = useState(0);

  function addTaskHandler(task) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function updateTaskHandler(updatedTask) {
    setTasks((prevTasks) => {
      const tasks = [...prevTasks];
      tasks[index] = { ...updatedTask };
      return tasks;
    });
    // setIndex(0);
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
            element={<Home tasks={tasks} onChangeIndex={changeIndexHandler} />}
          />
          <Route
            path="/newTask"
            element={<NewTask onAddTask={addTaskHandler} />}
          />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route
            path="/task"
            element={
              <ViewedTask
                task={tasks[index]}
                onUpdateTask={updateTaskHandler}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
