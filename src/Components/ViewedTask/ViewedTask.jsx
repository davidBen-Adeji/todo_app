import { useState } from "react";
import { Link } from "react-router-dom";

export default function ViewedTask({ task, onUpdateTask, onDeleteTask }) {
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [taskItems, setTaskItems] = useState(task.taskItems);
  const [taskItem, setTaskItem] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(taskItems.length).fill(false)
  );

  const updatedTask = { taskTitle, taskItems, id: task.id };

  function inputChangeHandler(inputName, value) {
    if (inputName === "taskTitle") {
      setTaskTitle(value);
    } else if (inputName === "taskItem") {
      setTaskItem(value);
    }
  }

  function toggleCheckedHandler(index) {
    setCheckedState((prevState) => {
      const state = [...prevState];
      state[index] = !state[index];
      return state;
    });
  }

  function addTaskItemsHandler(event, taskItem) {
    event.preventDefault();
    if (taskItem) {
      setTaskItems((prevItems) => [...prevItems, taskItem]);
      setTaskItem("");
    }
  }

  function deleteItemHandler(index) {
    setTaskItems((prevItems) => {
      const updatedTaskItems = [...prevItems];
      updatedTaskItems.splice(index, 1);
      return updatedTaskItems;
    });
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={taskTitle}
          placeholder="Add title here"
          onChange={(event) =>
            inputChangeHandler("taskTitle", event.target.value)
          }
        />
      </div>
      <ul>
        {taskItems.map((taskItem, index) => {
          return (
            <li key={`${taskItem}_${Math.random()}`}>
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => toggleCheckedHandler(index)}
              />{" "}
              {taskItem}
              <button type="button" onClick={() => deleteItemHandler(index)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <form
          action=""
          onSubmit={(event) => addTaskItemsHandler(event, taskItem)}
        >
          <input
            type="text"
            value={taskItem}
            placeholder="Add items here"
            onChange={(event) =>
              inputChangeHandler("taskItem", event.target.value)
            }
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <Link to="/" onClick={() => onDeleteTask(updatedTask)}>
        delete
      </Link>
      <Link to="/">Home</Link>
      <Link to="/" onClick={() => onUpdateTask(updatedTask)}>
        Done
      </Link>
    </>
  );
}
