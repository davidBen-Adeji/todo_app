import { Link } from "react-router-dom";

export default function TaskTitle({
  isChecked,
  inputId,
  path,
  onChangeIndex,
  children,
}) {
  let linkClass = "capitalize hover:underline";
  let spanClass = "";

  if (isChecked) {
    linkClass += " opacity-50 cursor-not-allowed hover:no-underline";
    spanClass = "block w-[70%] h-[70%] bg-black rounded-full cursor-pointer";
  }

  return (
    <div className="flex items-center gap-5">
      <label
        htmlFor={inputId}
        className="flex justify-center items-center w-5 h-5 border-black border rounded-full cursor-pointer"
      >
        <span className={spanClass}></span>
      </label>
      <Link to={path} onClick={onChangeIndex} className={linkClass}>
        {children}
      </Link>
    </div>
  );
}