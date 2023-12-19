// import RestoreImg from "../../assets/svg/restore.svg";
import RestoreImgBlue from "../../assets/svg/restore-blue.svg";
// import BinImg from "../../assets/svg/bin-green.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";
import { Link } from "react-router-dom";

import classes from "./BinItem.module.css";

export default function BinItem({ title, onRestoreTask, onDeletePermanently }) {
  return (
    <li className={`${classes.binItem} shadow-lg`}>
      <Link
        to=""
        className={classes.binItemLink}
      >
        {title}
      </Link>{" "}
      <div className={classes.buttons}>
        <button type="button" onClick={onRestoreTask}>
          <img className={classes.button} src={RestoreImgBlue} alt="restore" />
        </button>
        <button type="button" onClick={onDeletePermanently}>
          <img className={classes.button} src={BinImgBlue} alt="bin" />
        </button>
      </div>
    </li>
  );
}
