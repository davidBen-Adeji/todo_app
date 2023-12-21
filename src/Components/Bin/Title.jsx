import BinImg from "../../assets/svg/bin.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";
import BinImgOrange from "../../assets/svg/bin-orange.svg";
import BinImgRed from "../../assets/svg/bin-red.svg";

import classes from "./Title.module.css";

export default function Title({ themeColor }) {
  let imgSrc = BinImg;

  switch (themeColor) {
    case "blue":
      imgSrc = BinImgBlue;
      break;

    case "orange":
      imgSrc = BinImgOrange;
      break;

    case "red":
      imgSrc = BinImgRed;
      break;
  }

  return (
    <div className={classes.title}>
      <img src={imgSrc} alt="bin" />
      <h2 className={`${classes.titleHeader} text`}>Bin</h2>
    </div>
  );
}
