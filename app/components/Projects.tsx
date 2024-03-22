import ProjectsCarousel from './ProjectsCarousel';

export default function Projects() {
  const slides = [0, 1, 2];
  return (
    <div className="flex flex-col h-[160dvh]">
      <h1 className="sticky top-0 text-center font-black text-6xl mb-6">Projects</h1>
      <div className="sticky top-20">
        <ProjectsCarousel slides={slides}></ProjectsCarousel>
      </div>
    </div>
  );
}
