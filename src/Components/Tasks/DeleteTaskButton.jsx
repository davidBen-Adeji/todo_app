import BinImg from '../../assets/svg/bin-green.svg'

export default function DeleteTaskButton({ onDeleteTask }) {
  return (
    <button onClick={onDeleteTask} type="submit">
      <img className="w-6 h-6 opacity-95 hover:opacity-100" src={BinImg} alt="bin" />
    </button>
  );
}
