import CheckBox from "../Global/CheckBox";
import DeleteButton from "./DeleteButton";
import TaskTitle from "./TaskTitle";

export default function Task({
  to,
  children,
  isChecked,
  onToggleCheckBox,
  onChangeIndex,
  onDeleteTask,
}) {
  const path = isChecked ? "" : to;
  const inputId = `checkbox_${Math.random()}`;

  return (
    <li className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full">
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
      <DeleteButton onDeleteTask={onDeleteTask} />
    </li>
  );
}
