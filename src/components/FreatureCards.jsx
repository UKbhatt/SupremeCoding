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
    <div className="feature-grid">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <div className="icon-badge" style={{ backgroundColor: f.color }}>
            {f.icon}
          </div>
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.desc}</p>
          <div className="code-box">
            <code>{f.code}</code>
          </div>
        </div>
      ))}
    </div>
  );
}
