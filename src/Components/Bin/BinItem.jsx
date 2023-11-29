import RestoreImg from "../../assets/svg/restore.svg";
import BinImg from "../../assets/svg/bin-green.svg";
import { Link } from "react-router-dom";

export default function BinItem({ title, onRestoreTask, onDeletePermanently }) {
  return (
    <li className="relative mt-8 flex justify-between items-center gap-2 px-10 py-5 shadow-lg rounded-full">
      <Link
        to=""
        className="capitalize opacity-50 line-through hover:line-through cursor-not-allowed"
      >
        {title}
      </Link>{" "}
      <div className="flex items-center gap-2">
        <button type="button" onClick={onRestoreTask}>
          <img className="w-6 h-6" src={RestoreImg} alt="restore" />
        </button>
        <button type="button" onClick={onDeletePermanently}>
          <img className="w-6 h-6" src={BinImg} alt="bin" />
        </button>
      </div>
    </li>
  );
}
