import { Download, ArrowRight } from 'lucide-react';
import { endpoints } from '../lib/api.js';
import { KanbanMockup } from '../components/KanbanMockup.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      {/* Dot-grid background */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Radial glow behind headline */}
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      <div className="container hero__inner">
        {/* ── Left: Copy ── */}
        <div className="hero__copy">
          <p className="section-label reveal">Local-first productivity suite</p>

          <h1 className="hero__headline font-serif reveal reveal-delay-1">
            Your focus,<br />
            <em className="hero__headline-accent">uninterrupted.</em>
          </h1>

          <p className="hero__subheadline reveal reveal-delay-2">
            FlowState is a zero-latency desktop app for developers.
            Tasks, habits, notes, and Pomodoro — all running locally.
            No cloud. No subscriptions. No distractions.
          </p>

          <div className="hero__cta-group reveal reveal-delay-3">
            <a
              href={endpoints.downloadWindows}
              className="btn btn-primary hero__cta-download"
              aria-label="Download FlowState for Windows"
            >
              <Download size={16} strokeWidth={2} />
              Download for Windows
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label="View source on GitHub"
            >
              View on GitHub
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>

          <p className="hero__disclaimer reveal reveal-delay-4">
            Free forever · Windows · macOS &amp; Linux coming in v2
          </p>
        </div>

        {/* ── Right: App Mockup ── */}
        <div className="hero__mockup-wrapper reveal reveal-delay-2">
          <div className="hero__mockup-frame" aria-hidden="true">
            <KanbanMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
