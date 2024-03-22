'use client';
import Image from 'next/image';

export default function ProjectCarouselSlide({ index }: { index: number }) {
  const projects = [
    {
      title: 'Creator Cards',
      image: '/headshot.jpg',
      description:
        'Creator Cards is an influencer platform for no-code landing pages with deep customization and a familiar interface',
      website: 'No URL for now',
    },
    {
      title: 'Next Engine Optimization',
      image: '/headshot.jpg',
      description:
        'Next Engine Optimization (NEO) is a VSCode extension for Next.js developers that retrieve SEO metrics during development',
      website: 'No URL for now',
    },
    {
      title: 'Body X Chiro',
      image: '/headshot.jpg',
      description:
        'Body X Chiro is a Chiropractic Office that provides holistic healing with personalized treatment to every patient',
      website: 'No URL for now',
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
      <Image
        className="rounded-full shadow-lg border-2 mt-[5dvh] mb-6"
        src={project.image}
        width={230}
        height={230}
        alt="Headshot of Justin Shim"
      />
      <p className="text-lg px-8 font-light">{project.description}</p>
      <a
        className="text-3xl font-extrabold mt-6 underline"
        href={project.website}
      >
        to website&gt;&gt;
      </a>
    </div>
  );
}
