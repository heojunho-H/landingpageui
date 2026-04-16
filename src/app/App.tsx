import '../styles/landing.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Industries } from './components/Industries';
import { Demo } from './components/Demo';
import { Pricing } from './components/Pricing';
import { CaseStudies } from './components/CaseStudies';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <div className="h-px bg-[var(--border)] w-full"></div>
      <Features />
      <Industries />
      <Demo />
      <Pricing />
      <CaseStudies />
      <FinalCTA />
      <Footer />
    </div>
  );
}
