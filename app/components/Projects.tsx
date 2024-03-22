import ProjectsCarousel from './ProjectsCarousel';

export default function Projects() {
  const slides = [0, 1, 2];
  return (
    <div className="flex flex-col h-[100dvh]">
      <h1 className="font-black text-6xl">Projects</h1>
      <ProjectsCarousel slides={slides}></ProjectsCarousel>
    </div>
  );
}
