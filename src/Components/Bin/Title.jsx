// import BinImg from "../../assets/svg/bin.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";

import classes from "./Title.module.css";

export default function Title() {
  let titleColor = classes.titleBlue;

  return (
    <div className={classes.title}>
      <img src={BinImgBlue} alt="bin" />
      <h2 className={`${classes.titleHeader} ${titleColor}`}>Bin</h2>
    </div>
  );
}
