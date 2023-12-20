export default function CheckBox({ id, isChecked, onToggleCheckBox }) {
  return (
    <input
      className={`checkbox-0`}
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onToggleCheckBox}
    />
  );
}
