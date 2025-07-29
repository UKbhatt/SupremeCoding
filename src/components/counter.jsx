import "../App.css";

export default function Counter() {
  return (
    <div className="mt-5 w-full bg-[#0f0f0f] flex justify-center items-center gap-24 text-center flex-wrap">
      <div className="flex flex-col items-center font-mono">
        <div className="text-4xl font-bold text-blue-500">3500+</div>
        <span className="mt-2 text-base font-normal text-blue-300 leading-snug">Algorithmic Problems</span>
      </div>
      <div className="flex flex-col items-center font-mono">
        <div className="text-4xl font-bold text-blue-500">97%</div>
        <span className="mt-2 text-base font-normal text-blue-300 leading-snug">FAANG Success Rate</span>
      </div>
      <div className="flex flex-col items-center font-mono">
        <div className="text-4xl font-bold text-blue-500">50+</div>
        <span className="mt-2 text-base font-normal text-blue-300 leading-snug">Daily or Weekly Coding<br />Challenges</span>
      </div>
    </div>
  );
}
