// import BinImg from "../../assets/svg/bin-green.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";
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
    <li className={`${classes.list} shadow-lg rounded-full`}>
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
        <img className={classes.deleteButton} src={BinImgBlue} alt="bin" />
      </button>
    </li>
  );
}
