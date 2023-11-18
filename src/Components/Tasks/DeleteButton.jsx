import BinImg from '../../assets/svg/bin.svg'

export default function DeleteButton({ onDeleteTask }) {
  return (
    <button onClick={onDeleteTask} type="submit">
      <img className="w-6 h-6" src={BinImg} alt="bin" />
    </button>
  );
}
