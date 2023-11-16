import { Link } from "react-router-dom";

export default function Bin({ bin, onDeletePermanently, onRestoreTask }) {
  function onDeleteAll() {
    for (const b of bin) {
      onDeletePermanently(b);
    }
  }

  return (
    <>
      <h1>hi</h1>
      <ul>
        {bin &&
          bin.map((binItem) => (
            <li key={binItem.id}>
              {binItem.taskTitle}{" "}
              <button type="button" onClick={() => onRestoreTask(binItem)}>
                Restore
              </button>
              <button
                type="button"
                onClick={() => onDeletePermanently(binItem)}
              >
                delete
              </button>
            </li>
          ))}
      </ul>
      <button type="button" onClick={onDeleteAll}>
        Empty bin
      </button>

      <Link to="/">Home</Link>
    </>
  );
}
