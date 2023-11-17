import TaskImg from "../assets/svg/task.svg";
import BinImg from "../assets/svg/bin.svg";
import {useResolvedPath, useMatch, Link } from "react-router-dom";

export default function Header() {

return (
    <header className="bg-[#D9D9D9] px-5 py-4 flex gap-8 lappy:flex-col lappy:pt-24 lappy:gap-10">
        <CustomLink to="/">
            <img className="w-8 h-8" src={TaskImg} alt="tasks" />
            <p className="mb-0.5">Tasks</p>
        </CustomLink>
        <CustomLink to="/bin">
            <img className="w-7 h-7" src={BinImg} alt="bin" />
            <p>Bin</p>
        </CustomLink>
    </header>
) }

function CustomLink({to, children}) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link className="flex gap-1 items-end" to={to}>{children}</Link>
    )
}