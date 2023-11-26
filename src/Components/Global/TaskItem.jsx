import BinImg from "../../assets/svg/bin-green.svg";
import { deleteTaskItemHandler } from "../../util/functions";
import Item from "./Item";

export default function TaskItem({
  id,
  index,
  item,
  checkedState,
  setCheckedState,
  setTaskItems,
}) {
  return (
    <li
      className="relative mt-8 flex justify-between items-center gap-2 px-10 py-5 shadow-lg rounded-full"
    >
      <Item
        id={id}
        index={index}
        item={item}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
      <button
        type="button"
        onClick={() =>
          deleteTaskItemHandler(index, id, setTaskItems, setCheckedState)
        }
      >
        <img className="w-6 h-6" src={BinImg} alt="bin" />
      </button>
    </li>
  );
}
