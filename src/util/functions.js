export function toggleCheckBoxHandler(index, setCheckedState) {
  setCheckedState((prevState) => {
    const state = [...prevState];
    state[index] = !state[index];
    return state;
  });
}
