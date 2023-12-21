import BinImg from "../../assets/svg/bin-white.svg";
import BinImgBlack from "../../assets/svg/bin.svg";
import BinImgBlue from "../../assets/svg/bin-blue.svg";
import BinImgOrange from "../../assets/svg/bin-orange.svg";
import BinImgRed from "../../assets/svg/bin-red.svg";
import Title from "./Title";
import BinItems from "./BinItems";

import classes from "./Bin.module.css";

export default function Bin({
  bin,
  onDeletePermanently,
  onRestoreTask,
  themeColor,
}) {
  let imgSrc = BinImgBlack;

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


  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }

  let binItemsComponent = (
    <img src={imgSrc} alt="bin image" className={classes.bigBinImg} />
  );

  if (bin.length > 0) {
    binItemsComponent = (
      <BinItems
        bin={bin}
        onRestoreTask={onRestoreTask}
        onDeletePermanently={onDeletePermanently}
        themeColor={themeColor}
      />
    );
  }

  return (
    <>
      <Title themeColor={themeColor} />
      {binItemsComponent}
      <button
        className={`${classes.deleteButton} btn`}
        type="button"
        onClick={onDeleteAll}
      >
        <img src={BinImg} className={classes.binImg} alt="bin" />
      </button>
    </>
  );
}
