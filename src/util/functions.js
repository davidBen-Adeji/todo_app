export function toggleCheckBoxHandler(index, setCheckedState, id) {
  setCheckedState((prevState) => {
    const state = [...prevState];
    state[index] = !state[index];
    localStorage.setItem(`${id}_checkedState`, JSON.stringify(state));
    return state;
  });
}

export function inputChangeHandler(
  inputName,
  value,
  setTaskTitle,
  setTaskItem
) {
  if (inputName === "taskTitle") {
    setTaskTitle(value);
  } else if (inputName === "taskItem") {
    setTaskItem(value);
  }
}

export function addTaskItemHandler(
  event,
  taskItem,
  setTaskItems,
  setTaskItem,
  id
) {
  event.preventDefault();
  if (!taskItem) return;
  
  setTaskItems((prevItems) => {
    localStorage.setItem(
      `${id}_items`,
      JSON.stringify([...prevItems, taskItem])
    );
    return [...prevItems, taskItem];
  });
  setTaskItem("");
}

export function deleteTaskItemHandler(
  index,
  id,
  setTaskItems,
  setCheckedState
) {
  setTaskItems((prevItems) => {
    const updatedTaskItems = [...prevItems];
    updatedTaskItems.splice(index, 1);
    localStorage.setItem(`${id}_items`, JSON.stringify(updatedTaskItems));
    return updatedTaskItems;
  });
  setCheckedState((prevState) => {
    const newState = [...prevState];
    newState.splice(index, 1);
    localStorage.setItem(`${id}_checkedState`, JSON.stringify(newState));
    return newState;
  });
}
