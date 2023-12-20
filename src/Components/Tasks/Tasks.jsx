import TaskImg from "../../assets/svg/task.svg";
import TaskImgBlue from "../../assets/svg/task-blue.svg";
import TaskImgOrange from "../../assets/svg/task-orange.svg";
import TaskImgRed from "../../assets/svg/task-red.svg";
import Task from "./Task.jsx";
import Header from "./Header.jsx";
import NewTaskButton from "./NewTaskButton.jsx";

import classes from "./Tasks.module.css";

export default function Tasks({
  tasks,
  checkedState,
  onChangeIndex,
  onDeleteTask,
  onToggleCheckBox,
  themeColor,
}) {
  let imgSrc = TaskImg;

  switch (themeColor) {
    case "blue":
      imgSrc = TaskImgBlue;
      break;

    case "orange":
      imgSrc = TaskImgOrange;
      break;

    case "red":
      imgSrc = TaskImgRed;
      break;
  }

  let taskComponent = (
    <img src={imgSrc} alt="task image" className={classes.taskImg} />
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
            themeColor={themeColor}
          >
            {task.taskTitle}
          </Task>
        ))}
      </ul>
    );
  }
  return (
    <>
      <Header themeColor={themeColor} />
      {taskComponent}
      <NewTaskButton themeColor={themeColor} />
    </>
  );
}
