import './DashboardMockup.css';

// CSS-drawn replica of the FlowState Dashboard screen

function HeatmapGrid() {
  // Generate 30 cells with random activity levels for visual effect
  const cells = Array.from({ length: 30 }, (_, i) => {
    const level = [0, 0, 1, 1, 2, 3][Math.floor(Math.random() * 6)];
    return { i, level };
  });
  return (
    <div className="dash-heatmap">
      {cells.map(({ i, level }) => (
        <div key={i} className={`dash-heatmap__cell level-${level}`} />
      ))}
    </div>
  );
}

const urgentTasks = [
  { title: 'Deploy staging environment', badge: 'OVR', days: 'Overdue', ovr: true },
  { title: 'Code review: auth module', badge: 'HIGH', days: '1d left', ovr: false },
  { title: 'Update dependencies', badge: 'MED', days: '3d left', ovr: false },
];

const habits = [
  { name: 'Morning standup', done: true },
  { name: 'Exercise 30min', done: true },
  { name: 'Read tech articles', done: false },
];

export function DashboardMockup() {
  return (
    <div className="dash-mockup">
      {/* Left sidebar */}
      <div className="dash-sidebar">
        <div className="dash-logo font-serif">
          Flow<span className="dash-logo-accent">State.</span>
        </div>
        {['Dashboard', 'Tasks', 'Habits', 'Pomodoro', 'Notes'].map((item, i) => (
          <div key={item} className={`dash-nav-item ${i === 0 ? 'dash-nav-item--active' : ''}`}>
            <div className="dash-nav-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="dash-main">
        {/* Header */}
        <div className="dash-header">
          <div>
            <p className="dash-greeting font-mono">Monday, Sep 9</p>
            <h2 className="dash-title font-serif">Good morning.</h2>
          </div>
          <div className="dash-score">
            <span className="dash-score__label font-mono">SCORE</span>
            <span className="dash-score__value">87</span>
          </div>
        </div>

        {/* Heatmap widget */}
        <div className="dash-widget">
          <p className="dash-widget__label font-mono">30-DAY PRODUCTIVITY</p>
          <HeatmapGrid />
        </div>

        {/* Urgent tasks */}
        <div className="dash-widget">
          <p className="dash-widget__label font-mono">URGENT TASKS</p>
          <div className="dash-tasks">
            {urgentTasks.map(({ title, badge, days, ovr }) => (
              <div key={title} className="dash-task-row">
                <span className="dash-task-title">{title}</span>
                <span className={`dash-task-badge ${ovr ? 'dash-task-badge--ovr' : ''}`}>
                  {ovr ? 'OVR' : days}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Habits launchpad */}
        <div className="dash-widget">
          <p className="dash-widget__label font-mono">TODAY'S HABITS</p>
          <div className="dash-habits">
            {habits.map(({ name, done }) => (
              <div key={name} className="dash-habit-row">
                <div className={`dash-habit-check ${done ? 'dash-habit-check--done' : ''}`} />
                <span className={`dash-habit-name ${done ? 'dash-habit-name--done' : ''}`}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
