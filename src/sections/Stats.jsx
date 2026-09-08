import { Shield, Zap, WifiOff, Lock } from 'lucide-react';
import './Stats.css';

const stats = [
  { icon: WifiOff,  label: '100% Offline',        desc: 'Works without internet' },
  { icon: Zap,      label: 'Zero Latency',         desc: 'No server round-trips' },
  { icon: Shield,   label: 'Private by Design',    desc: 'Your data never leaves your device' },
  { icon: Lock,     label: 'No Subscriptions',     desc: 'Free forever, no account needed' },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Key stats">
      <hr className="divider" />
      <div className="container stats__inner">
        {stats.map(({ icon: Icon, label, desc }, i) => (
          <div
            key={label}
            className={`stats__item reveal reveal-delay-${i + 1}`}
          >
            <Icon size={18} strokeWidth={1.5} className="stats__icon" />
            <div>
              <p className="stats__label">{label}</p>
              <p className="stats__desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="divider" />
    </section>
  );
}
