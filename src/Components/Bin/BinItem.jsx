import RestoreImg from "../../assets/svg/restore.svg";
import BinImg from "../../assets/svg/bin.svg";
import { Link } from "react-router-dom";

export default function BinItem({ title, item, index, onRestoreTask, onDeletePermanently }) {
  return (
    <li
      className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full"
    >
      <Link to="" className="capitalize opacity-50 cursor-not-allowed">
        {title}
      </Link>{" "}
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => onRestoreTask(item, index)}>
          <img className="w-6 h-6" src={RestoreImg} alt="restore" />
        </button>
        <button type="button" onClick={() => onDeletePermanently(item, index)}>
          <img className="w-6 h-6" src={BinImg} alt="bin" />
        </button>
      </div>
    </li>
  );
}
