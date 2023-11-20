import BinImg from "../../assets/svg/bin.svg";
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
      className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full"
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
