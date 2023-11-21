import TaskImg from "../../assets/svg/task.svg";
import BinImg from "../../assets/svg/bin.svg";
import CustomLink from "./CustomLink.jsx";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-[#D9D9D9] px-5 py-4 flex gap-8 lappy:flex-col lappy:pt-24 lappy:gap-10">
      <CustomLink to="/">
        <img className="w-8 h-8" src={TaskImg} alt="tasks" />
        <p className="mb-0.5">Tasks</p>
      </CustomLink>
      <CustomLink to="/bin">
        <img className="w-7 h-7" src={BinImg} alt="bin" />
        <p>Bin</p>
      </CustomLink>
    </header>
  );
}
