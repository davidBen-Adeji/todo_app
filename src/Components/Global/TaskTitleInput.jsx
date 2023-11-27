import { inputChangeHandler } from "../../util/functions";

export default function TaskTitleInput({ title, setTaskTitle, setTaskItem }) {
  return (
    <div className="mt-4 mb-8">
      <input
        className=" bg-white w-[75%] border-b border-jade-500 py-2 shadow-md px-4 capitalize outline-none text-3xl rounded-full"
        type="text"
        value={title}
        placeholder="Add title here"
        onChange={(event) =>
          inputChangeHandler(
            "taskTitle",
            event.target.value,
            setTaskTitle,
            setTaskItem
          )
        }
      />
    </div>
  );
}
