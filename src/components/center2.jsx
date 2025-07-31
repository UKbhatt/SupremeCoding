import '../App.css';

export default function Center2() {
  return (
    <div className="mt-7 flex justify-center items-center font-mono flex-col text-white px-4 text-center">
      
      <div className="text-sm bg-gray-800 px-3 py-1 rounded-full mb-4">
        <h5>class TrustedPlatform extends Supreme-Coding</h5>
      </div>

      <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
        Ready to <span className="text-orange-400 font-extrabold">elevate</span> your coding<br />skills?
      </div>

      <div className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl">
        Start your journey toward algorithmic mastery and interview success today.
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
          $ start signup --free
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white border-2 border-gray-700 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl">
          <span className="whitespace-nowrap">$ view --challenges</span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <code>no_credit_card_required = true;</code>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-400" />
          <code>free_problems.length === 100;</code>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-400" />
          <code>canUpgrade = "anytime";</code>
        </div>
      </div>
    </div>
  );
}
