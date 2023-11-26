import { Link } from "react-router-dom";
import AddImg from "../../assets/svg/add.svg";

export default function NewTaskButton() {
  return (
    <Link
      className="absolute bg-gradient-to-br from-jade-400 to-jade-600 hover:from-jade-500 hover:to-jade-700 right-10 lappy:right-16 bottom-14 lappy:bottom-7 flex justify-center items-center w-14 h-14 rounded-full"
      to="/newTask"
    >
      <img className="w-[65%] h-[65%]" src={AddImg} alt="add a new task" />
    </Link>
  );
}
