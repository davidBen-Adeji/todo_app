import TaskItem from "./TaskItem";
export default function TaskItems({
  id,
  taskItems,
  checkedState,
  setCheckedState,
  setTaskItems,
}) {
  return (
    <>
      {taskItems.map((item, index) => (
        <TaskItem
          key={`${item}_${Math.random()}`}
          id={id}
          index={index}
          item={item}
          checkedState={checkedState[index]}
          setCheckedState={setCheckedState}
          setTaskItems={setTaskItems}
        />
      ))}
    </>
  );
}
