import TaskImg from "../../assets/svg/task-white.svg";
import BinImg from "../../assets/svg/bin-white.svg";
import CustomLink from "./CustomLink.jsx";

import classes from "./Header.module.css";
import ThemeButtons from "./ThemeButtons.jsx";

export default function Header({
  undoneTasksLength,
  binLength,
  themeColor,
  onChangeThemeColor,
}) {
  return (
    <header className={`${themeColor} ${classes.header} headerBg`}>
      <ThemeButtons
        themeColor={themeColor}
        onChangeThemeColor={onChangeThemeColor}
      />
      <div className={classes.nav}>
        <CustomLink to="/">
          <img className={classes.taskImg} src={TaskImg} alt="tasks" />
          <p className="text-white mb-0.64">Tasks</p>
          <p
            className={`${classes.headerLengths} length 
            ${undoneTasksLength > 0 ? "opacity-100" : "opacity-0"}`}
          >
            {undoneTasksLength}
          </p>
        </CustomLink>
        <CustomLink to="/bin">
          <img className={classes.binImg} src={BinImg} alt="bin" />
          <p className="text-white mb-0.64">Bin</p>
          <p
            className={`${classes.headerLengths} length
             ${binLength > 0 ? "opacity-100" : "opacity-0"}`}
          >
            {binLength}
          </p>
        </CustomLink>
      </div>
    </header>
  );
}
