import RoutesComponent from "./RoutesComponent.jsx";

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
}) {
  return (
    <main className="bg-white px-7 pb-1 overflow-y-scroll">
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
      />
    </main>
  );
}
