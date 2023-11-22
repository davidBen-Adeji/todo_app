import { Link } from "react-router-dom";

export default function NewTaskButton() {
  return (
    <Link
      className="absolute right-10 lappy:right-20 bottom-7 flex justify-center bg-[#d9d9d9] w-14 h-14 rounded-full text-5xl"
      to="/newTask"
    >
      <span>+</span>
    </Link>
  );
}
