import classes from "./CheckBox.module.css";

export default function CheckBox({ id, isChecked, onToggleCheckBox }) {
  return (
    <input
      className={classes.checkbox}
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onToggleCheckBox}
    />
  );
}
