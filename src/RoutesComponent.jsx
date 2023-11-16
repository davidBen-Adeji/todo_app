import { Routes, Route } from "react-router-dom";
import Tasks from "./Components/Tasks/Tasks.jsx";
import NewTask from "./Components/NewTask/NewTask.jsx";
import Bin from "./Components/Bin/Bin.jsx";
import ViewedTask from "./Components/ViewedTask/ViewedTask.jsx";

export default function RoutesComponent({
  task,
  tasks,
  bin,
  onChangeIndex,
  onAddTask,
  onDeleteTask,
  onUpdateTask,
  onRestoreTask,
  onDeletePermanently,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Tasks
            tasks={tasks}
            onChangeIndex={onChangeIndex}
            onDeleteTask={onDeleteTask}
          />
        }
      />
      <Route path="/newTask" element={<NewTask onAddTask={onAddTask} />} />
      <Route
        path="/task"
        element={
          <ViewedTask
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        }
      />
      <Route
        path="/bin"
        element={
          <Bin
            bin={bin}
            onDeletePermanently={onDeletePermanently}
            onRestoreTask={onRestoreTask}
          />
        }
      />
    </Routes>
  );
}