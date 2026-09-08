import './PomodoroMockup.css';

export function PomodoroMockup() {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.72; // 72% complete for visual demo

  return (
    <div className="pomo-mockup">
      {/* Mode tabs */}
      <div className="pomo-tabs">
        {['Focus', 'Short Break', 'Long Break'].map((label, i) => (
          <div key={label} className={`pomo-tab ${i === 0 ? 'pomo-tab--active' : ''}`}>
            {label}
          </div>
        ))}
      </div>

      {/* SVG ring timer */}
      <div className="pomo-ring-wrap">
        <svg className="pomo-ring" viewBox="0 0 120 120" aria-hidden="true">
          {/* Background track */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="var(--border-dim)"
            strokeWidth="3.5"
          />
          {/* Progress arc */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="var(--accent-green)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            transform="rotate(-90 60 60)"
            style={{ filter: 'drop-shadow(0 0 8px rgba(92,138,99,0.6))' }}
          />
        </svg>

        {/* Time display inside ring */}
        <div className="pomo-ring-inner">
          <div className="pomo-time font-mono">18:02</div>
          <div className="pomo-mode font-mono">FOCUS</div>
        </div>
      </div>

      {/* Controls */}
      <div className="pomo-controls">
        <button className="pomo-btn pomo-btn--primary">
          <span>⏸</span> Pause
        </button>
        <button className="pomo-btn pomo-btn--ghost">Reset</button>
      </div>

      {/* Daily stats */}
      <div className="pomo-stats">
        <div className="pomo-stat">
          <span className="pomo-stat__value font-mono">4</span>
          <span className="pomo-stat__label font-mono">TODAY</span>
        </div>
        <div className="pomo-stat-divider" />
        <div className="pomo-stat">
          <span className="pomo-stat__value font-mono">1h 40m</span>
          <span className="pomo-stat__label font-mono">FOCUSED</span>
        </div>
        <div className="pomo-stat-divider" />
        <div className="pomo-stat">
          <span className="pomo-stat__value font-mono">2</span>
          <span className="pomo-stat__label font-mono">STREAK</span>
        </div>
      </div>
    </div>
  );
}
