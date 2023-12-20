// import BinImg from "../../assets/svg/bin.svg";
// import BinImgBlue from "../../assets/svg/bin-blue.svg";
// import BinImgOrange from "../../assets/svg/bin-orange.svg";
import BinImgRed from "../../assets/svg/bin-red.svg";

import classes from "./Title.module.css";

export default function Title() {
  let titleColor = "textRed";

  return (
    <div className={classes.title}>
      <img src={BinImgRed} alt="bin" />
      <h2 className={`${classes.titleHeader} ${titleColor}`}>Bin</h2>
    </div>
  );
}
