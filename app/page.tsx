import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TopButton from './components/TopButton';
import { AuroraBackground } from './components/ui/aurora-background';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* <AuroraBackground> */}
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <TopButton />
      {/* </AuroraBackground> */}
    </main>
  );
}
