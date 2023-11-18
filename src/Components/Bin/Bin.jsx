import BinImg from "../../assets/svg/bin.svg";
import Title from "./Title";
import BinItems from "./BinItems";

export default function Bin({ bin, onDeletePermanently, onRestoreTask }) {
  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }

  return (
    <>
      <Title />
      <BinItems
        bin={bin}
        onRestoreTask={onRestoreTask}
        onDeletePermanently={onDeletePermanently}
      />
      <button
        className="absolute right-7 bottom-6 flex justify-center items-center bg-[#d9d9d9] w-14 h-14 rounded-full"
        type="button"
        onClick={onDeleteAll}
      >
        <img src={BinImg} alt="bin" />
      </button>
    </>
  );
}
