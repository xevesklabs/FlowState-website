import { ExternalLink, XIcon } from 'lucide-react';
import './Footer.css';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Download', href: '#download' },
  { label: 'GitHub', href: 'https://github.com/xevesklabs/FlowState', external: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        
        <div className="footer__brand">
          <span className="footer__logo font-serif">
            Flow<span style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>State.</span>
          </span>
          <p className="footer__tagline">
            Your productivity, completely offline.<br />
            Zero cloud. Zero latency. Yours alone.
          </p>
        </div>

        <nav className="footer__nav font-mono">
          {navLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className="footer__link"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
