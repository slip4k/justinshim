import Landing from './components/Landing';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Landing />
      <Projects />
    </main>
  );
}
