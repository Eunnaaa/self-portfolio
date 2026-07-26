import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ProjectGrid } from './sections/ProjectGrid';
import { Contact } from './sections/Contact';
import './index.css';
import { Skills } from './sections/SkillPage';
import { Education } from './sections/Education';

function App() {
  return (
    <div className="antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;