import BinImg from '../../assets/svg/bin.svg';

export default function Title() {
  return (
    <div className="flex gap-2 items-end mt-6 mb-8">
      <img src={BinImg} alt="bin" />
      <h2 className="text-2xl">Bin</h2>
    </div>
  );
}
