import TaskImg from "../../assets/svg/task-white.svg";
import BinImg from "../../assets/svg/bin-white.svg";
import CustomLink from "./CustomLink.jsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-br from-jade-500 to-jade-800 px-5 py-4 flex gap-8 lappy:flex-col lappy:pt-24 lappy:gap-10">
      <CustomLink to="/">
        <img className="w-8 h-8" src={TaskImg} alt="tasks" />
        <p className="text-white mb-0.5">Tasks</p>
      </CustomLink>
      <CustomLink to="/bin">
        <img className="w-7 h-7" src={BinImg} alt="bin" />
        <p className="text-white">Bin</p>
      </CustomLink>
    </header>
  );
}
