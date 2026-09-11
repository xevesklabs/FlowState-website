import { ExternalLink, XIcon } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Download', href: '#download' },
    { label: 'Changelog', href: '#' },
  ],
  Developer: [
    { label: 'GitHub', href: 'https://github.com', external: true },
    { label: 'Architecture', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr className="divider" />
      <div className="footer__inner container">
        {/* Brand col */}
        <div className="footer__brand">
          <span className="footer__logo font-serif">
            Flow<span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>State.</span>
          </span>
          <p className="footer__tagline">
            Your productivity, completely offline.<br />
            Zero cloud. Zero latency. Yours alone.
          </p>
          <div className="footer__social">
            <a
              href="https://github.com/xevesklabs/FlowState"
              className="footer__social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://x.com"
              className="footer__social-link"
              aria-label="X / Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer__col">
            <h4 className="footer__col-title font-mono">{group}</h4>
            <ul>
              {links.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer__link"
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom container">
        <p className="footer__copy">
          © {year} FlowState. Built for developers who ship.
        </p>
        <p className="footer__legal">
          <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            flowstate.xevesk.com
          </span>
        </p>
      </div>
    </footer>
  );
}
