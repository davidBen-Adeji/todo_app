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
  setCheckedState,
  setIsInputFieldEmpty,
  id
) {
  event.preventDefault();
  const item = taskItem.trim()

  if (!item) {
    setIsInputFieldEmpty(true);

    setTimeout(() => {
      setIsInputFieldEmpty(false);
    }, 500)
    return;
  }

  setTaskItems((prevItems) => {
    localStorage.setItem(
      `${id}_items`,
      JSON.stringify([...prevItems, item])
    );
    return [...prevItems, item];
  });

  setTaskItem("");

  setCheckedState((prevState) => {
    localStorage.setItem(
      `${id}_checkedState`,
      JSON.stringify([...prevState, false])
    );
    return [...prevState, false];
  });
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

// an id is automatically generated when create new task link is clicked on
// this removes the id if the operation is cancelled
export function removeNewId() {
  if (!JSON.parse(localStorage.getItem("newId"))) return;

  const id = JSON.parse(localStorage.getItem("newId"));
  localStorage.removeItem(`${id}_items`);
  localStorage.removeItem(`${id}_checkedState`);
  localStorage.removeItem("newId");
}
