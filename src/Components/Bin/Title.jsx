import BinImg from "../../assets/svg/bin.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";
import BinImgOrange from "../../assets/svg/bin-orange.svg";
import BinImgRed from "../../assets/svg/bin-red.svg";

import classes from "./Title.module.css";

export default function Title({ themeColor }) {
  let titleColor = "";
  let imgSrc = BinImg;

  switch (themeColor) {
    case "blue":
      imgSrc = BinImgBlue;
      titleColor = "textBlue";
      break;

    case "orange":
      imgSrc = BinImgOrange;
      titleColor = "textOrange";
      break;

    case "red":
      imgSrc = BinImgRed;
      titleColor = "textRed";
      break;
  }

  return (
    <div className={classes.title}>
      <img src={imgSrc} alt="bin" />
      <h2 className={`${classes.titleHeader} ${titleColor}`}>Bin</h2>
    </div>
  );
}
