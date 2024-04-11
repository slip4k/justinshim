'use client';
import { HoverEffect } from './ui/card-hover-effect';

const items = [
  {
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: 'https://www.typescriptlang.org/',
    image: '/tscolorlogo.png',
  },
  {
    title: 'Next.js',
    description:
      'A React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.',
    link: 'https://nextjs.org/',
    image: '/nextcirclelogo.png',
  },
  {
    title: 'React',
    description:
      'A JavaScript library for building user interfaces, enabling the creation of reusable UI components.',
    link: 'https://reactjs.org/',
    image: '/reactcolorlogo.png',
  },
  {
    title: 'Git',
    description:
      'A distributed version-control system for tracking changes in source code during software development.',
    link: 'https://git-scm.com/',
    image: '/gitlogo.png',
  },
  {
    title: 'Prisma',
    description:
      'A next-generation ORM for Node.js and TypeScript, making database access easy with an auto-generated query builder for TypeScript & Node.js.',
    link: 'https://www.prisma.io/',
    image: '/prismalogo.png',
  },
  {
    title: 'TailwindCSS',
    description:
      'A utility-first CSS framework for rapidly building custom designs, providing low-level utility classes to build custom designs without writing CSS.',
    link: 'https://tailwindcss.com/',
    image: '/tailwindlogo.png',
  },
];

export default function Skills() {
  return (
    <>
      <div className="w-full mt-96 z-10">
        <h1 className="text-left text-7xl lg:text-9xl">Skills</h1>
        <hr className="border-b-4 border-foreground flex-grow" />
        <div className="flex justify-center items-center">
          <HoverEffect items={items}></HoverEffect>
        </div>
      </div>
    </>
  );
}
