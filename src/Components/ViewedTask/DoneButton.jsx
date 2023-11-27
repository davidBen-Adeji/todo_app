import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";

export default function DoneButton({ onUpdateTask }) {
  return (
    <Link
      className="absolute right-10 lappy:right-16 bottom-14 lappy:bottom-7 bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-14 h-14 rounded-full"
      to="/"
      onClick={onUpdateTask}
    >
      <img className="w-9 h-9" src={DoneImg} alt="done" />
    </Link>
  );
}
