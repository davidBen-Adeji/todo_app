// import BinImg from "../../assets/svg/bin-green.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";

import classes from "./DeleteTaskButton.module.css";

export default function DeleteTaskButton({ onDeleteTask }) {
  return (
    <button onClick={onDeleteTask} type="submit">
      <img
        className={classes.deleteTaskButton}
        src={BinImgBlue}
        alt="bin"
      />
    </button>
  );
}
