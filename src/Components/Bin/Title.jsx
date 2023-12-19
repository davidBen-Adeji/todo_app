import BinImg from "../../assets/svg/bin.svg";

import classes from "./Title.module.css";

export default function Title() {
  return (
    <div className={classes.title}>
      <img src={BinImg} alt="bin" />
      <h2 className={classes.titleHeader}>Bin</h2>
    </div>
  );
}
