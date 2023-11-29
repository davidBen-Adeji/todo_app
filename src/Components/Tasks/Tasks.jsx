import TaskImg from "../../assets/svg/task.svg";
import Task from "./Task.jsx";
import Header from "./Header.jsx";
import NewTaskButton from "./NewTaskButton.jsx";

export default function Tasks({
  tasks,
  checkedState,
  onChangeIndex,
  onDeleteTask,
  onToggleCheckBox,
}) {
  let taskComponent = (
    <img
      src={TaskImg}
      alt="task image"
      className="opacity-50 w-1/2 h-1/2 m-auto mt-28"
    />
  );

  if (tasks.length > 0) {
    taskComponent = (
      <ul>
        {tasks.map((task, index) => (
          <Task
            to="/task"
            key={task.id}
            isChecked={checkedState[index]}
            onToggleCheckBox={() => onToggleCheckBox(index)}
            onChangeIndex={() => onChangeIndex(index)}
            onDeleteTask={() => onDeleteTask(task, index)}
          >
            {task.taskTitle}
          </Task>
        ))}
      </ul>
    );
  }
  return (
    <>
      <Header />
      {taskComponent}
      <NewTaskButton />
    </>
  );
}
