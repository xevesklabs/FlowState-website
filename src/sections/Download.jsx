import { Download, Monitor, Apple, Terminal, Smartphone } from 'lucide-react';
import { endpoints } from '../lib/api.js';
import { useDownloadCount } from '../hooks/useDownloadCount.js';
import './Download.css';

const platforms = [
  {
    icon: Monitor,
    label: 'Windows',
    tag: null,
    available: true,
    href: endpoints.downloadWindows,
  },
  {
    icon: Apple,
    label: 'macOS',
    tag: 'v2',
    available: false,
    href: null,
  },
  {
    icon: Terminal,
    label: 'Linux',
    tag: 'v2',
    available: false,
    href: null,
  },
  {
    icon: Smartphone,
    label: 'iOS',
    tag: 'v2',
    available: false,
    href: null,
  },
  {
    icon: Smartphone,
    label: 'Android',
    tag: 'v2',
    available: false,
    href: null,
  },
];

export default function Download() {
  const { count } = useDownloadCount();

  return (
    <section className="download" id="download" aria-label="Download FlowState">

      {/* Green radial glow */}
      <div className="download__glow" aria-hidden="true" />

      <div className="container download__inner">

        {/* Badge */}
        <p className="section-label reveal">Free download</p>

        {/* Headline */}
        <h2 className="download__heading font-serif reveal reveal-delay-1">
          Ready to get in the<br />
          <em className="download__heading-accent">flow?</em>
        </h2>

        <p className="download__sub reveal reveal-delay-2">
          One file. No installer wizard. No account. Open it and you're in.
        </p>

        {/* Primary CTA */}
        <a
          href={endpoints.downloadWindows}
          className="btn btn-primary download__btn reveal reveal-delay-3"
          aria-label="Download FlowState for Windows"
        >
          <Download size={18} strokeWidth={2} />
          Download for Windows
        </a>

        {/* Download count — shown only when API returns a value */}
        {count !== null && (
          <p className="download__count font-mono reveal reveal-delay-4">
            {count.toLocaleString()} downloads and counting
          </p>
        )}

        {/* OS selector row */}
        <div className="download__platforms reveal reveal-delay-4">
          {platforms.map(({ icon: Icon, label, tag, available, href }) =>
            available ? (
              <a key={label} href={href} className="platform-pill platform-pill--active">
                <Icon size={14} strokeWidth={1.5} />
                {label}
              </a>
            ) : (
              <span key={label} className="platform-pill platform-pill--coming">
                <Icon size={14} strokeWidth={1.5} />
                {label}
                <span className="platform-pill__tag">{tag}</span>
              </span>
            )
          )}
        </div>

        {/* Reassurance strip */}
        <div className="download__assurance reveal reveal-delay-5">
          {['100% Local Data', 'No Account Required', 'Free Forever', 'Open Source'].map((item) => (
            <span key={item} className="assurance-item font-mono">
              <span className="assurance-dot" />
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
