import { useState } from 'react';
import { LayoutDashboard, CheckSquare, FileText, Timer } from 'lucide-react';
import { DashboardMockup } from '../components/DashboardMockup.jsx';
import { KanbanMockup } from '../components/KanbanMockup.jsx';
import { NotesMockup } from '../components/NotesMockup.jsx';
import { PomodoroMockup } from '../components/PomodoroMockup.jsx';
import './Showcase.css';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, Component: DashboardMockup },
  { id: 'tasks',     label: 'Tasks',     icon: CheckSquare,     Component: KanbanMockup },
  { id: 'notes',     label: 'Notes',     icon: FileText,        Component: NotesMockup },
  { id: 'pomodoro',  label: 'Pomodoro',  icon: Timer,           Component: PomodoroMockup },
];

export default function Showcase() {
  const [active, setActive] = useState('dashboard');
  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section className="showcase" id="showcase" aria-label="App showcase">
      <div className="container">

        {/* Header */}
        <div className="showcase__header reveal">
          <h2 className="section-heading">
            Built for the way developers<br />
            <span className="showcase__heading-secondary">actually work.</span>
          </h2>
          <p className="section-subheading">
            Every screen is crafted for focus. No clutter, no distractions —
            just a clean interface between you and your work.
          </p>
        </div>

        {/* Tab bar */}
        <div className="showcase__tabs reveal" role="tablist" aria-label="App screens">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={active === id}
              aria-controls={`panel-${id}`}
              className={`showcase__tab ${active === id ? 'showcase__tab--active' : ''}`}
              onClick={() => setActive(id)}
            >
              <Icon size={14} strokeWidth={1.5} />
              {label}
            </button>
          ))}
        </div>

        {/* App frame */}
        <div className="showcase__frame reveal">
          {/* Window chrome */}
          <div className="showcase__chrome">
            <div className="showcase__chrome-dots">
              <span className="chrome-dot chrome-dot--red" />
              <span className="chrome-dot chrome-dot--yellow" />
              <span className="chrome-dot chrome-dot--green" />
            </div>
            <span className="showcase__chrome-title font-mono">
              FlowState — {activeTab.label}
            </span>
            <div className="showcase__chrome-spacer" />
          </div>

          {/* Screen container */}
          <div className="showcase__screens">
            {tabs.map(({ id, Component }) => (
              <div
                key={id}
                id={`panel-${id}`}
                role="tabpanel"
                className={`showcase__screen ${active === id ? 'showcase__screen--active' : ''}`}
                aria-hidden={active !== id}
              >
                <Component />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
