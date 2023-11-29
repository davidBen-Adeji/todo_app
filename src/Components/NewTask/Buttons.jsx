import CancelImg from "../../assets/svg/cancel.svg";
import DoneImg from "../../assets/svg/done.svg";

import { Link } from "react-router-dom";
import { removeNewId } from "../../util/functions";

export default function Buttons({ onAddTask }) {
  return (
    <div className="absolute w-14 right-8 bottom-14 lappy:right-16 lappy:bottom-7 flex flex-col justify-center items-center gap-4">
      <Link
        to="/"
        className="bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-7 h-7 rounded-full"
        onClick={removeNewId}
      >
        <img src={CancelImg} alt="cancel" />
      </Link>
      <Link
        className="bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 flex justify-center items-center w-12 h-12 rounded-full"
        to="/"
        onClick={onAddTask}
      >
        <img className="w-9 h-9" src={DoneImg} alt="done" />
      </Link>
    </div>
  );
}
