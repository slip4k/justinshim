'use client';
import Image from 'next/image';

export default function ProjectCarouselSlide({ index }: { index: number }) {
  const projects = [
    {
      title: 'Creator Cards',
      image: '/creatorcards.png',
      description:
        'Creator Cards is an influencer platform for no-code landing pages with deep customization and a familiar interface',
      website: 'No URL for now',
    },
    {
      title: 'Next Engine Optimization',
      image: '/neo.png',
      description:
        'Next Engine Optimization (NEO) is a VSCode extension for Next.js developers that retrieve SEO metrics during development',
      website: 'https://next-metrics.vercel.app/',
    },
    {
      title: 'Body X Chiro',
      image: '/bodyxchiro.png',
      description:
        'Body X Chiro is a Chiropractic Office providing holistic healing with through patient-specific treatment',
      website: 'https://www.bodyxchiro.com/',
    },
  ];

  const project = projects[index] ?? {
    title: '',
    image: '',
    description: '',
    website: '',
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl text-center font-bold">{project.title}</h1>
      <div className="relative">
        {/* <div className="transform-gpu absolute top-36 -z-10 -left-6 w-60 h-60 bg-[#3a86ff] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="transform-gpu absolute bottom-12 -z-10 -right-4 w-72 h-72 bg-[#ff006e] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="transform-gpu absolute top-72 -z-10 -right-4 w-60 h-60 bg-[#8338ec] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div> */}
        <Image
          className="rounded-lg shadow-lg border-8 transform-gpu rotate-[17deg] border-black my-6"
          src={project.image}
          width={120}
          height={230}
          alt="Application demo image"
        />
        <Image
          src="/phoneshadow.png"
          width={100}
          height={30}
          alt="Phones Shadow"
        />
      </div>
      <p className="text-lg text-center px-8 font-light">
        {project.description}
      </p>
      {project.website === 'No URL for now' ? (
        <p className="text-2xl font-extrabold mt-6">Under Development</p>
      ) : (
        <a
          className="text-3xl font-extrabold mt-6 underline"
          href={project.website}
        >
          to website&gt;&gt;
        </a>
      )}
    </div>
  );
}
