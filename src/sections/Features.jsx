import {
  LayoutDashboard, CheckSquare, FileText,
  Timer, Activity, Search
} from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    title: 'Command center for your day.',
    desc: 'A 30-day productivity heatmap, urgent task triage, and a daily habit launchpad — all in one unified view.',
    accent: 'primary',
    size: 'wide',   // spans 2 columns
  },
  {
    icon: CheckSquare,
    label: 'Smart Tasks',
    title: 'Kanban that gets out of your way.',
    desc: 'Three-state workflow — To Do, In Progress, Done. Priority badges and deadline countdowns.',
    accent: 'violet',
    size: 'normal',
  },
  {
    icon: Timer,
    label: 'Pomodoro',
    title: 'Deep work, engineered.',
    desc: '25-minute focus intervals with short and long breaks. Drift-proof countdown.',
    accent: 'primary',
    size: 'normal',
  },
  {
    icon: FileText,
    label: 'Notes',
    title: 'A knowledge base that lives locally.',
    desc: 'Split-pane rich text editor. Pin important notes, auto-save, and never lose a thought.',
    accent: 'cyan',
    size: 'normal',
  },
  {
    icon: Activity,
    label: 'Habits',
    title: 'Build consistency, visually.',
    desc: '30-day contribution heatmap for every habit. One-click logging with timezone-safe tracking.',
    accent: 'violet',
    size: 'normal',
  },
  {
    icon: Search,
    label: 'Instant Search',
    title: 'Find anything, instantly.',
    desc: 'Client-side filtering across all your tasks in real time. No loading. No server.',
    accent: 'primary',
    size: 'normal',
  },
];

export default function Features() {
  return (
    <section className="features" id="features" aria-label="Features">
      <div className="container">
        <div className="features__header reveal">
          <h2 className="section-heading">
            Everything a developer needs.<br />
            <span className="features__heading-secondary">Nothing you don't.</span>
          </h2>
        </div>

        <div className="features__grid">
          {features.map(({ icon: Icon, label, title, desc, accent, size }, i) => (
            <div
              key={label}
              className={`feature-card feature-card--${accent} feature-card--${size} reveal`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="feature-card__content">
                <div className={`feature-card__icon-wrap icon-wrap--${accent}`}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <p className="feature-card__label font-mono">{label}</p>
                <h3 className="feature-card__title font-serif">{title}</h3>
                <p className="feature-card__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
