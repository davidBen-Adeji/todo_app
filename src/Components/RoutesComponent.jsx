import { Routes, Route } from "react-router-dom";
import Tasks from "./Tasks/Tasks.jsx";
import NewTask from "./NewTask/NewTask.jsx";
import Bin from "./Bin/Bin.jsx";
import ViewedTask from "./ViewedTask/ViewedTask.jsx";

export default function RoutesComponent({
  task,
  tasks,
  checkedState,
  bin,
  onChangeIndex,
  onAddTask,
  onDeleteTask,
  onUpdateTask,
  onRestoreTask,
  onDeletePermanently,
  onToggleCheckBox,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Tasks
            tasks={tasks}
            checkedState={checkedState}
            onChangeIndex={onChangeIndex}
            onDeleteTask={onDeleteTask}
            onToggleCheckBox={onToggleCheckBox}
          />
        }
      />
      <Route path="/newTask" element={<NewTask onAddTask={onAddTask} />} />
      <Route
        path="/task"
        element={<ViewedTask task={task} onUpdateTask={onUpdateTask} />}
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
