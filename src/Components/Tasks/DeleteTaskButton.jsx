// import BinImg from "../../assets/svg/bin-green.svg";
// import BinImgBlue from "../../assets/svg/bin-blue.svg";
import BinImgOrange from "../../assets/svg/bin-orange.svg";

import classes from "./DeleteTaskButton.module.css";

export default function DeleteTaskButton({ onDeleteTask }) {
  return (
    <button onClick={onDeleteTask} type="submit">
      <img
        className={classes.deleteTaskButton}
        src={BinImgOrange}
        alt="bin"
      />
    </button>
  );
}
