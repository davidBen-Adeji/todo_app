import { Link } from "react-router-dom";

export default function TaskTitle({
  isChecked,
  inputId,
  path,
  onChangeIndex,
  children,
}) {
  let clickedLinkClass = "";
  let spanClass = "";

  if (isChecked) {
    clickedLinkClass =
      "opacity-50 cursor-not-allowed line-through hover:line-through";
    spanClass =
      "block w-[70%] h-[70%] bg-gradient-to-br from-jade-200 to-jade-400 rounded-full cursor-pointer";
  }

  return (
    <div className="flex items-center gap-5">
      <label
        htmlFor={inputId}
        className="flex justify-center items-center w-5 h-5 transition duration-200 hover:scale-110 focus:scale-110 border-jade-700 border rounded-full cursor-pointer"
      >
        <span className={`${spanClass}`}></span>
      </label>
      <Link
        to={path}
        onClick={onChangeIndex}
        className={`capitalize hover:underline ${clickedLinkClass}`}
      >
        {children}
      </Link>
    </div>
  );
}
