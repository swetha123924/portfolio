import React, { useEffect, useState } from 'react';
import './App.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Feedback from './components/feedback';
import Footer from './components/footer';
import LoadingScreen from './components/LoadingScreen';
import Experience from './components/Experience';
import BackToTop from './components/BackToTop';

export type PortfolioTheme = {
  id: string;
  name: string;
  background: string;
  surface: string;
  accent: string;
  accentSoft: string;
};

const portfolioThemes: PortfolioTheme[] = [
  {
    id: 'baby-pink',
    name: 'Baby Pink',
    background: '#fff5f8',
    surface: '#ffe4ee',
    accent: '#ec4899',
    accentSoft: 'rgba(236, 72, 153, 0.18)',
  },
  {
    id: 'blush',
    name: 'Soft Blush',
    background: '#fff0f5',
    surface: '#ffd9e6',
    accent: '#f472b6',
    accentSoft: 'rgba(244, 114, 182, 0.18)',
  },
  {
    id: 'rose',
    name: 'Rose Petal',
    background: '#fff7fa',
    surface: '#fcd5e0',
    accent: '#db2777',
    accentSoft: 'rgba(219, 39, 119, 0.18)',
  },
  {
    id: 'cream',
    name: 'Cream Pink',
    background: '#fffafc',
    surface: '#ffe9f1',
    accent: '#e11d74',
    accentSoft: 'rgba(225, 29, 116, 0.18)',
  },
];


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [particlesReady, setParticlesReady] = useState(false);
  const [theme, setTheme] = useState(portfolioThemes[0]);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div
      className="relative min-h-screen theme-shell"
      style={{
        '--theme-bg': theme.background,
        '--theme-surface': theme.surface,
        '--theme-accent': theme.accent,
        '--theme-accent-soft': theme.accentSoft,
      } as React.CSSProperties}
    >
      {/* Particle Background */}
      {particlesReady && (
        <Particles
          key={theme.id}
          id="tsparticles"
          options={{
            background: {
              color: {
                value: theme.background,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: theme.accent,
              },
              links: {
                color: theme.accent,
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        <Header themes={portfolioThemes} activeTheme={theme.id} onThemeChange={setTheme} />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Feedback />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
