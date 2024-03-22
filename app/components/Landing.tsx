import NavBar from './NavBar';
import Image from 'next/image';
import Typewriter from './Typewriter';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center h-[100dvh]">
        <NavBar />
        <Image
          className="rounded-full shadow-lg border-2 mt-[5dvh] mb-6"
          src="/headshot.jpg"
          width={230}
          height={230}
          alt="Headshot of Justin Shim"
        />
        <h2 className="font-extrabold text-4xl drop-shadow-md">Justin Shim</h2>
        <h1 className="font-extrabold text-5xl drop-shadow-md mb-2 ml-5 ease-in-out transition-transform">
          <Typewriter />
        </h1>
        <p className="mx-4 font-light text-2xl text-center">
          I build products in search of three principles: aesthetics,
          functionality, and scalability
        </p>
        <div className="flex w-[60dvw] justify-between ml-6 my-6">
          <button className="bg-black text-white rounded-3xl py-2 px-4">
            Projects
          </button>
          <button className="bg-black text-white rounded-3xl py-2 px-4">
            Contact Me
          </button>
        </div>
        <div className="flex w-[35dvw] justify-between">
          <Image
            src="/github.png"
            height={48}
            width={48}
            alt="Github Logo that Leads to the profile of Justin Shim"
          />
          <Image
            src="/linkedin.png"
            height={48}
            width={48}
            alt="LinkedIn Logo that Leads to the profile of Justin Shim"
          />
        </div>
      </div>
    </>
  );
}
