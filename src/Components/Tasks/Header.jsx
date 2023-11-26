import TaskImg from '../../assets/svg/task-green.svg'

export default function Header() {
  return (
    <div className="flex items-center mt-5 mb-8 gap-2">
      <img className="w-18 h-18" src={TaskImg} alt="task" />
      <h1 className="text-3xl text-jade-600">Tasks</h1>
    </div>
  );
}
