import ProjectsCarousel from './ProjectsCarousel';
import Image from 'next/image';

export default function Projects() {
  const slides = [0, 1, 2];
  return (
    <div id="projects" className="flex flex-col h-[130dvh] md:mt-36 relative">
      <Image
        className="absolute md:left-[10dvw] top-12 filter blur-sm"
        src="/nextlogo.png"
        width={247}
        height={247}
        alt="Next.js logo"
      />
      <Image
        className="absolute md:right-[10dvw] top-[50dvh] -right-2 filter blur-sm"
        src="/reactlogo.png"
        width={200}
        height={200}
        alt="Next.js logo"
      />
      <Image
        className="absolute bottom-0 md:left-[20dvw] left-6 filter blur-sm"
        src="/tslogo.png"
        width={130}
        height={130}
        alt="Next.js logo"
      />

      <h1 className="sticky top-0 text-center font-black text-6xl mb-6">
        Projects
      </h1>
      <div className="sticky top-20">
        <ProjectsCarousel slides={slides}></ProjectsCarousel>
      </div>
    </div>
  );
}
