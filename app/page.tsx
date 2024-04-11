import Contact from './components/Contact';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative mx-4">
      <Landing />
      <Projects />
      <Contact />
    </main>
  );
}
