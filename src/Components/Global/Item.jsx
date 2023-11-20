import { toggleCheckBoxHandler } from "../../util/functions";

export default function Item({
  id,
  index,
  item,
  checkedState,
  setCheckedState,
}) {
  let clickedLabelClass = "opacity-100";
  let spanClass = "";

  if (checkedState) {
    clickedLabelClass = " opacity-50";
    spanClass = "block w-[70%] h-[70%] bg-black rounded-full cursor-pointer";
  }

  const inputId = `checkbox_${Math.random()}`;

  return (
    <div className="flex items-center gap-5">
      <input
        className="absolute opacity-0"
        type="checkbox"
        checked={checkedState}
        onChange={() => toggleCheckBoxHandler(index, setCheckedState, id)}
        id={inputId}
      />{" "}
      <label
        htmlFor={inputId}
        className="flex justify-center items-center w-5 h-5 border-black border rounded-full cursor-pointer"
      >
        <span className={`${spanClass}`}></span>
      </label>
      <label htmlFor={inputId} className={`capitalize cursor-pointer hover:underline ${clickedLabelClass}`}>
        {item}
      </label>
    </div>
  );
}
