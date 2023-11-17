import { Link } from "react-router-dom";
import BinImg from "../../assets/svg/bin.svg";
import RestoreImg from "../../assets/svg/restore.svg";

export default function Bin({ bin, onDeletePermanently, onRestoreTask }) {
  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }

  return (
    <>
      <div className="flex gap-2 items-end mt-6 mb-8">
        <img src={BinImg} alt="bin" />
        <h2 className="text-2xl">Bin</h2>
      </div>
      <ul>
        {bin &&
          bin.map((binItem) => (
            <li
              className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full"
              key={binItem.id}
            >
              <Link to="" className="capitalize opacity-50 cursor-not-allowed">
                {binItem.taskTitle}
              </Link>{" "}
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => onRestoreTask(binItem)}>
                  <img className="w-6 h-6" src={RestoreImg} alt="restore" />
                </button>
                <button
                  type="button"
                  onClick={() => onDeletePermanently(binItem)}
                >
                  <img className="w-6 h-6" src={BinImg} alt="bin" />
                </button>
              </div>
            </li>
          ))}
      </ul>
      <button
        className="absolute right-7 bottom-6 flex justify-center items-center bg-[#d9d9d9] w-14 h-14 rounded-full"
        type="button"
        onClick={onDeleteAll}
      >
        <img src={BinImg} alt="bin" />
      </button>

      {/* <Link to="/">Home</Link> */}
    </>
  );
}
