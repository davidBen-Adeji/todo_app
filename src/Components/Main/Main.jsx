import RoutesComponent from "../RoutesComponent.jsx";
import classes from "./Main.module.css";

export default function Main({
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
    <main className={`${themeColor} bg ${classes.main}`}>
      <RoutesComponent
        task={task}
        tasks={tasks}
        checkedState={checkedState}
        bin={bin}
        onChangeIndex={onChangeIndex}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        onUpdateTask={onUpdateTask}
        onRestoreTask={onRestoreTask}
        onDeletePermanently={onDeletePermanently}
        onToggleCheckBox={onToggleCheckBox}
        themeColor={themeColor}
      />
    </main>
  );
}
