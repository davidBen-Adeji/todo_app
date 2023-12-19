import BinImg from "../../assets/svg/bin-white.svg";
import BlackBinImg from "../../assets/svg/bin.svg";
import Title from "./Title";
import BinItems from "./BinItems";

import classes from "./Bin.module.css";

export default function Bin({ bin, onDeletePermanently, onRestoreTask }) {
  let btnColor = classes.btnBlue;
  
  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }

  let binItemsComponent = (
    <img
      src={BlackBinImg}
      alt="bin image"
      className={classes.blackBinImg}
    />
  );

  if (bin.length > 0) {
    binItemsComponent = (
      <BinItems
        bin={bin}
        onRestoreTask={onRestoreTask}
        onDeletePermanently={onDeletePermanently}
      />
    );
  }

  return (
    <>
      <Title />
      {binItemsComponent}
      <button
        className={`${classes.deleteButton} ${btnColor}`}
        type="button"
        onClick={onDeleteAll}
      >
        <img src={BinImg} className={classes.binImg} alt="bin" />
      </button>
    </>
  );
}
