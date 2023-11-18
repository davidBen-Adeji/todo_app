export default function CheckBox({ id, isChecked, onToggleCheckBox }) {
  return (
    <input
      className="absolute opacity-0 top-12"
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onToggleCheckBox}
    />
  );
}
