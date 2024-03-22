import Contact from './components/Contact';
import Landing from './components/Landing';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Landing />
      <Projects />
      <Contact />
    </main>
  );
}
