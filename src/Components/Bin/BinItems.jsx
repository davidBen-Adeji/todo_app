import BinItem from "./BinItem.jsx";

export default function BinItems({ bin, onRestoreTask, onDeletePermanently }) {
  return (
    <ul>
      {bin &&
        bin.map((binItem) => (
          <BinItem
            key={binItem.id}
            title={binItem.taskTitle}
            item={binItem}
            onRestoreTask={onRestoreTask}
            onDeletePermanently={onDeletePermanently}
          />
        ))}
    </ul>
  );
}
