import BinImg from "../../assets/svg/bin.svg";
import Title from "./Title";
import BinItems from "./BinItems";

export default function Bin({ bin, onDeletePermanently, onRestoreTask }) {
  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }
  console.log(bin);

  let binItemsComponent = (
    <img
      src={BinImg}
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
        className="absolute right-10 lappy:right-15 bottom-7 flex justify-center items-center bg-[#d9d9d9] w-14 h-14 rounded-full"
        type="button"
        onClick={onDeleteAll}
      >
        <img src={BinImg} alt="bin" />
      </button>
    </>
  );
}
