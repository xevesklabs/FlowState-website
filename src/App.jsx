import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import Showcase from './sections/Showcase.jsx';
import Download from './sections/Download.jsx';
import Stats from './sections/Stats.jsx';

// Scroll-reveal: attach IntersectionObserver to all .reveal elements
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      {/* Grain texture overlay — sits on top of everything */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Features />
        <Showcase />
        <Download />
      </main>

      <Footer />
    </>
  );
}
