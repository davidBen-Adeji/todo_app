import BinItem from "./BinItem.jsx";

export default function BinItems({
  bin,
  onRestoreTask,
  onDeletePermanently,
  themeColor,
}) {
  return (
    <ul>
      {bin &&
        bin.map((binItem, index) => (
          <BinItem
            key={binItem.id}
            title={binItem.taskTitle}
            onRestoreTask={() => onRestoreTask(binItem, index)}
            onDeletePermanently={() => onDeletePermanently(binItem)}
            themeColor={themeColor}
          />
        ))}
    </ul>
  );
}
