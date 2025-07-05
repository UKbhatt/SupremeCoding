import '../App.css';

export default function TrustedSection() {
  return (
    <div className="trusted-section">
      <div className="class-label">class TrustedPlatform extends AlgoLab</div>

      <h1 className="main-heading">
        Trusted by DSA <span className="blue-text">experts</span> worldwide
      </h1>

      <div className="code-snippet">
        <span className="blue">function</span>{' '}
        <span className="yellow">aceInterviews</span>() =&gt;{' '}
        <span className="green">confidence</span> *{' '}
        <span className="purple">practice</span>;
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-number">12K+</span>
          <span className="stat-label">Daily Commits</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">95%</span>
          <span className="stat-label">Optimization Rate</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Tech Companies</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">15min</span>
          <span className="stat-label">Avg. Runtime</span>
        </div>
      </div>
    </div>
  );
}
