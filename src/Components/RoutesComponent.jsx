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
  themeColor,
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
            themeColor={themeColor}
          />
        }
      />
      <Route
        path="/newTask"
        element={<NewTask onAddTask={onAddTask} themeColor={themeColor} />}
      />
      <Route
        path="/task"
        element={
          <ViewedTask
            task={task}
            onUpdateTask={onUpdateTask}
            themeColor={themeColor}
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
            themeColor={themeColor}
          />
        }
      />
    </Routes>
  );
}
