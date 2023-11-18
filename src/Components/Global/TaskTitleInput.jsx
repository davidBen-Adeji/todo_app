import { inputChangeHandler } from "../../util/functions";

export default function TaskTitleInput({ title, setTaskTitle, setTaskItem }) {
  return (
    <div className="mt-4 mb-8">
      <input
        className=" bg-[#F5F5F5] w-[75%] border-b border-black py-2 px-1 capitalize outline-none text-3xl"
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
