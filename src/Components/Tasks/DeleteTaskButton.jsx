import BinImg from "../../assets/svg/bin-green.svg";

import classes from "./DeleteTaskButton.module.css";

export default function DeleteTaskButton({ onDeleteTask }) {
  return (
    <button onClick={onDeleteTask} type="submit">
      <img
        className={classes.deleteTaskButton}
        src={BinImg}
        alt="bin"
      />
    </button>
  );
}
