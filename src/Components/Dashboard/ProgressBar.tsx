
interface ProgressBarProps {
  percentage: number; // 0 to 100
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-300 rounded-full overflow-hidden h-12">
      <div
        className="bg-teal-500 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
