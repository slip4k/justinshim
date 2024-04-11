import NavBar from './NavBar';
import Image from 'next/image';
import Typewriter from './Typewriter';
import { AuroraBackground } from './ui/aurora-background';

export default function Landing() {
  return (
    <div className="flex flex-col items-center w-full h-[1000px] z-10">
      <NavBar />
      <div className="flex flex-col items-center text-center w-full">
        <h2 className="font-light text-5xl lg:text-7xl drop-shadow-md">
          Justin Shim
        </h2>
        <h1 className="font-medium text-6xl lg:text-8xl drop-shadow-md mb-2 ml-5 ease-in-out transition-transform">
          <Typewriter />
        </h1>
        <p className="flex justify-center items-center mx-4 font-light text-md lg:text-xl lg:w-[28rem] w-[70dvw] text-center">
          Product-driven developer building innovative digital products with a
          focus on scalability
        </p>
      </div>
      {/* <div className="transform-gpu absolute top-12 md:top-24 -z-10 sm:left-[40dvw] left-4 w-80 h-80 bg-[#00539CFF] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="transform-gpu absolute bottom-56 md:bottom-72 -z-10 sm:left-[40dvw] left-4 w-72 h-72 bg-[#FFD662FF] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div> */}
      <div className="flex flex-col lg:flex-row  justify-center items-center w-full">
        <a
          className="w-full text-center text-sm lg:text-xl hover:underline mt-10 lg:mt-0"
          href="mailto:justinjaeshim@gmail.com"
        >
          justinjaeshim@gmail.com
        </a>
        <Image
          className="rounded-full shadow-lg border-2 mt-12 mb-6 z-10"
          src="/headshot.jpg"
          width={448}
          height={448}
          alt="Headshot of Justin Shim"
        />
        <div className="flex justify-center gap-x-6 w-full">
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
    </div>
  );
}
