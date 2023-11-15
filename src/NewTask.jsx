import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewTask({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskItem, setTaskItem] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const task = { taskTitle, taskItems, id: `${taskTitle}_${Math.random()}`};

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
      <h1>New task</h1>
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
        {task.taskItems.map((item) => (
          <li key={`${item}_${Math.random()}`}>{item}</li>
        ))}
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
      <Link to="/">Home</Link>
          <Link to="/" onClick={() => onAddTask(task)}>Done</Link>
    </>
  );
}
