// import BinImg from "../../assets/svg/bin-green.svg";
// import BinImgBlue from "../../assets/svg/bin-blue.svg";
// import BinImgOrange from "../../assets/svg/bin-orange.svg";
import BinImgRed from "../../assets/svg/bin-red.svg";
import { deleteTaskItemHandler } from "../../util/functions";
import Item from "./Item";

import classes from "./TaskItem.module.css";

export default function TaskItem({
  id,
  index,
  item,
  checkedState,
  setCheckedState,
  setTaskItems,
}) {
  return (
    <li className={`list shadow-lg rounded-full`}>
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
        <img className={classes.deleteButton} src={BinImgRed} alt="bin" />
      </button>
    </li>
  );
}
