import { useMatch, useResolvedPath, Link } from "react-router-dom";
import BinImg from '../../assets/svg/bin.svg'
export default function Task({
  to,
  children,
  isChecked,
  onToggleCheck,
  onChangeIndex,
  onDeleteTask,
}) {
  const path = isChecked ? "" : to;
  const resolvedPath = useResolvedPath(path);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const inputId = `checkbox_${Math.random()}`
  return (
    <li className="relative bg-[#D9D9D9] mt-6 flex justify-between items-center gap-2 p-3 rounded-full">
      <input className="absolute opacity-0" type="checkbox" id={inputId} checked={isChecked} onChange={onToggleCheck} />
        <div className="flex items-center gap-5">
          <label htmlFor={inputId} className="flex justify-center items-center w-5 h-5 border-black border rounded-full cursor-pointer"><span className="block w-[70%] h-[70%] bg-black rounded-full cursor-pointer"></span></label>
          <Link to={path} onClick={onChangeIndex} className="capitalize">
            {children}
          </Link>
        </div>
      <button onClick={onDeleteTask} type="submit">
       <img className="w-6 h-6" src={BinImg} alt="bin" /> 
      </button>
    </li>
  );
}