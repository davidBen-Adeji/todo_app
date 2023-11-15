import { useState } from "react";
import { Link } from "react-router-dom";

export default function ViewedTask({ task, onUpdateTask, onDeleteTask }) {
  const [taskTitle, setTaskTitle] = useState(task.taskTitle);
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, setTaskItems] = useState(task.taskItems);
  const updatedTask = { taskTitle, taskItems, id: task.id };

  function inputChangeHandler(inputName, value) {
    if (inputName === "taskTitle") {
      setTaskTitle(value);
    } else if (inputName === "taskItem") {
      setTaskItem(value);
    }
  }

  function taskItemsHandler(event, taskItem) {
    event.preventDefault();
    if (taskItem) {
      setTaskItems((prevItems) => [...prevItems, taskItem]);
      setTaskItem("");
    }
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
        {taskItems.map((taskItem) => {
          return <li key={`${taskItem}_${Math.random()}`}>{taskItem}</li>;
        })}
      </ul>
      <div>
        <form action="" onSubmit={(event) => taskItemsHandler(event, taskItem)}>
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
