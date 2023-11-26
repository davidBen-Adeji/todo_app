import BinImg from '../../assets/svg/bin.svg';

export default function Title() {
  return (
    <div className="flex gap-1 items-center mt-6 mb-8">
      <img src={BinImg} alt="bin" />
      <h2 className="text-2xl mt-1">Bin</h2>
    </div>
  );
}
