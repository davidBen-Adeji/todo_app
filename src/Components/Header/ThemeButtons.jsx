import classes from "./ThemeButtons.module.css";

export default function ThemeButtons({ themeColor, onChangeThemeColor }) {
  return (
    <div className={classes.buttons}>
      <button
        onClick={() => onChangeThemeColor("green")}
        className={`${classes.btn} ${classes.btnGreen} 
        ${themeColor === "green" ? classes.active : ""}`}
      ></button>
      <button
        onClick={() => onChangeThemeColor("blue")}
        className={`${classes.btn} ${classes.btnBlue} 
        ${themeColor === "blue" ? classes.active : ""}`}
      ></button>
      <button
        onClick={() => onChangeThemeColor("orange")}
        className={`${classes.btn} ${classes.btnOrange} 
        ${themeColor === "orange" ? classes.active : ""}`}
      ></button>
      <button
        onClick={() => onChangeThemeColor("red")}
        className={`${classes.btn} ${classes.btnRed} 
        ${themeColor === "red" ? classes.active : ""}`}
      ></button>
    </div>
  );
}
