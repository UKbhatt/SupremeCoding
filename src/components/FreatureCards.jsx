import '../App.css';
import { FaBrain, FaBullseye, FaBolt, FaChartLine, FaCogs, FaCode } from 'react-icons/fa';

const features = [
  {
    icon: <FaBrain />,
    color: '#ec4899',
    title: '<Algorithm> Mastery',
    desc: 'Traverse curated algorithm patterns from Arrays to Dynamic Programming with O(n) time complexity learning paths.',
    code: 'function binarySearch(arr, target) {...}'
  },
  {
    icon: <FaBullseye />,
    color: '#0ea5e9',
    title: 'FAANG Interview Prep',
    desc: 'Execute real questions from Google, Meta, Amazon with detailed runtime analysis and optimization strategies.',
    code: 'const optimizeRuntime = (solution) => {...}'
  },
  {
    icon: <FaBolt />,
    color: '#f59e0b',
    title: 'Live Coding Contests',
    desc: 'Compete in weekly challenges with real-time leaderboards. Debug, optimize, and submit solutions under pressure.',
    code: 'while(timeRemaining > 0) { solveOptimally(); }'
  },
  {
    icon: <FaChartLine />,
    color: '#8b5cf6',
    title: 'ML-Powered Analytics',
    desc: 'Neural networks track your performance patterns, identify optimization opportunities, and predict interview success rates.',
    code: 'model.predict(userPerformanceData);'
  },
  {
    icon: <FaCogs />,
    color: '#10b981',
    title: 'Runtime Optimization',
    desc: 'Analyze time/space complexity, benchmark solutions against optimal approaches, and refactor for peak performance.',
    code: '// O(n log n) → O(n) optimization'
  },
  {
    icon: <FaCode />,
    color: '#a855f7',
    title: 'Multi-Language Runtime',
    desc: 'Execute code in Python, Java, C++, JavaScript with compiler optimizations and memory-efficient execution environments.',
    code: "const runtime = new Runtime('python');"
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-[#0f0f0f] py-16 px-6 sm:px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-900 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg transition-transform duration-300 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 hover:scale-105 hover:from-blue-900 hover:to-blue-800"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl mb-4"
              style={{ backgroundColor: f.color }}
            >
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold font-mono text-white mb-2">{f.title}</h3>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed">{f.desc}</p>
            <div className="bg-slate-900/70 border border-slate-700 px-4 py-2 rounded-lg font-mono text-xs text-green-500 overflow-x-auto">
              <code>{f.code}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
