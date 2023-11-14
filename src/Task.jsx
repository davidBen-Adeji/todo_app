import { INITIAL_TASKS } from "./INITIAL_TASKS";

export default function Task({ index }) {
  return (
    <>
      <h1>{INITIAL_TASKS[index].taskName}</h1>
      <ul>
        {INITIAL_TASKS[index].taskItems.map((taskItem) => {
          return <li key={`${taskItem}_${Math.random()}`}>{taskItem}</li>;
        })}
      </ul>
    </>
  );
}
