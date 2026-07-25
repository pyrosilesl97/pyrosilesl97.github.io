import { About } from './components/About';
import { BackToTop } from './components/BackToTop';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Projects } from './components/Projects';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { useLanguage } from './hooks/useLanguage';
import { useReveal } from './hooks/useReveal';

export function App() {
  const { t, lang } = useLanguage();

  // Switching language re-renders every section, so re-observe the new nodes.
  useReveal([lang]);

  return (
    <>
      <a className="skip-link" href="#about">
        {t.a11y.skipToContent}
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Highlights />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
