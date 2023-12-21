import CheckBox from "./CheckBox.jsx";
import DeleteTaskButton from "./DeleteTaskButton.jsx";
import TaskTitle from "./TaskTitle";

export default function Task({
  to,
  children,
  isChecked,
  onToggleCheckBox,
  onChangeIndex,
  onDeleteTask,
  themeColor,
}) {
  const path = isChecked ? "" : to;
  const inputId = `checkbox_${Math.random()}`;

  return (
    <li className={`list shadow-lg rounded-full`}>
      <CheckBox
        id={inputId}
        isChecked={isChecked}
        onToggleCheckBox={onToggleCheckBox}
      />
      <TaskTitle
        isChecked={isChecked}
        inputId={inputId}
        path={path}
        onChangeIndex={onChangeIndex}
      >
        {children}
      </TaskTitle>
      <DeleteTaskButton onDeleteTask={onDeleteTask} themeColor={themeColor} />
    </li>
  );
}
