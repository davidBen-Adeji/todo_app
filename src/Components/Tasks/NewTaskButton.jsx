import { Link } from "react-router-dom";
import AddImg from "../../assets/svg/add.svg";

import classes from "./NewTaskButton.module.css";

export default function NewTaskButton({ themeColor }) {
  let btnColor = "btnGreen";

  switch (themeColor) {
    case "blue":
      btnColor = "btnBlue";
      break;

    case "orange":
      btnColor = "btnOrange";
      break;

    case "red":
      btnColor = "btnRed";
      break;
  }

  return (
    <Link
      className={`${classes.newTaskButton} ${btnColor} rounded-full`}
      to="/newTask"
    >
      <img className={classes.addImg} src={AddImg} alt="add a new task" />
    </Link>
  );
}
