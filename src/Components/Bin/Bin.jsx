import BinImg from "../../assets/svg/bin-white.svg";
import BlackBinImg from "../../assets/svg/bin.svg";
import Title from "./Title";
import BinItems from "./BinItems";

export default function Bin({ bin, onDeletePermanently, onRestoreTask }) {
  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }

  let binItemsComponent = (
    <img
      src={BlackBinImg}
      alt="bin image"
      className="opacity-50 w-1/2 h-1/2 mx-auto mt-28"
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
        className="absolute bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 right-10 lappy:right-16 bottom-14 lappy:bottom-7 flex justify-center items-center w-14 h-14 rounded-full text-5xl"
        type="button"
        onClick={onDeleteAll}
      >
        <img src={BinImg} className="w-[65%] h-[65%]" alt="bin" />
      </button>
    </>
  );
}
