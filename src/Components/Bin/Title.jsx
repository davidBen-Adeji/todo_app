// import BinImg from "../../assets/svg/bin.svg";
// import BinImgBlue from "../../assets/svg/bin-blue.svg";
import BinImgOrange from "../../assets/svg/bin-orange.svg";

import classes from "./Title.module.css";

export default function Title() {
  let titleColor = classes.titleOrange;

  return (
    <div className={classes.title}>
      <img src={BinImgOrange} alt="bin" />
      <h2 className={`${classes.titleHeader} ${titleColor}`}>Bin</h2>
    </div>
  );
}
