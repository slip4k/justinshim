import NavBar from './NavBar';
import Image from 'next/image';
import Typewriter from './Typewriter';

export default function Landing() {
  const logos = [
    '/tscolorlogo.png',
    '/nextcirclelogo.png',
    '/reactcolorlogo.png',
    '/gitlogo.png',
    '/prismalogo.png',
    '/tailwindlogo.png',
  ];
  return (
    <>
      <div className="flex flex-col items-center h-[100dvh] relative">
        <NavBar />
        <div className="transform-gpu absolute top-12 md:top-24 -z-10 sm:left-[40dvw] left-4 w-80 h-80 bg-[#00539CFF] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="transform-gpu absolute bottom-56 md:bottom-72 -z-10 sm:left-[40dvw] left-4 w-72 h-72 bg-[#FFD662FF] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <Image
          className="rounded-full shadow-lg border-2 mt-12 mb-6 -z-10"
          src="/headshot.jpg"
          width={230}
          height={230}
          alt="Headshot of Justin Shim"
        />
        <div className="flex flex-col text-center w-full lg:w-[30dvw]">
          <h2 className="font-extrabold text-4xl drop-shadow-md">
            Justin Shim
          </h2>
          <h1 className="font-extrabold text-5xl drop-shadow-md mb-2 ml-5 ease-in-out transition-transform">
            <Typewriter />
          </h1>
          <p className="mx-4 font-light text-2xl text-center">
            I build products in search of three principles: aesthetics,
            functionality, and scalability
          </p>
        </div>
        <div className="flex w-[60dvw] justify-between sm:justify-evenly md:justify-center md:gap-x-6 ml-6 my-6">
          <a
            href="#projects"
            className="bg-black text-white rounded-3xl py-2 px-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-black text-white rounded-3xl py-2 px-4"
          >
            Contact Me
          </a>
        </div>
        <div className="flex w-[35dvw] justify-between sm:justify-evenly md:justify-center md:gap-x-6">
          <a className="hover:scale-125" href="https://github.com/slip4k">
            <Image
              src="/github.png"
              height={48}
              width={48}
              alt="Github Logo that Leads to the profile of Justin Shim"
            />
          </a>
          <a
            className="hover:scale-125"
            href="https://www.linkedin.com/in/justinshim/"
          >
            <Image
              src="/linkedin.png"
              height={48}
              width={48}
              alt="LinkedIn Logo that Leads to the profile of Justin Shim"
            />
          </a>
        </div>
      </div>
      <div className="flex lg:w-[50dvw] h-full w-[100dvw] font-bold mt-2 mb-2 overflow-hidden">
        <div className="flex animate-loop-scroll whitespace-nowrap">
          {logos.map((logo, index) => {
            return (
              <Image
                src={logo}
                alt="logo image"
                width={409}
                height={250}
                key={index}
              />
            );
          })}
        </div>
        <div
          className="flex animate-loop-scroll whitespace-nowrap"
          aria-hidden="true"
        >
          {logos.map((logo, index) => {
            return (
              <Image
                src={logo}
                alt="logo image"
                width={409}
                height={250}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
