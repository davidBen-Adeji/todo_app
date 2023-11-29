import { useState } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main.jsx";

export default function TodoApp() {
  const [undoneTasksLength, setUndoneTasksLength] = useState(
    JSON.parse(localStorage.getItem("undoneTasksLength")) || 0
  );
  const [binLength, setBinLength] = useState(
    JSON.parse(localStorage.getItem("binLength")) || 0
  );

  function updateUndoneTasksLengthHandler(lengthValue) {
    if (undoneTasksLength === lengthValue) return;

    localStorage.setItem("undoneTasksLength", JSON.stringify(lengthValue));
    setUndoneTasksLength(lengthValue);
  }

  function updateBinLengthHandler(lengthValue) {
    if (binLength === lengthValue) return;

    localStorage.setItem("binLength", JSON.stringify(lengthValue));
    setBinLength(lengthValue);
  }

  return (
    <>
      <Header undoneTasksLength={undoneTasksLength} binLength={binLength} />
      <Main
        onUpdateUndoneTasksLength={updateUndoneTasksLengthHandler}
        onUpdateBinLength={updateBinLengthHandler}
      />
    </>
  );
}
