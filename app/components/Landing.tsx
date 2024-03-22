import NavBar from './NavBar';
import Image from 'next/image';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center h-[100dvh]">
        <NavBar />
        <Image
          className="rounded-full shadow-lg border-2"
          src="/headshot.jpg"
          width={230}
          height={230}
          alt="Headshot of Justin Shim"
        />
        <h2 className="font-extrabold text-4xl drop-shadow-md">Justin Shim</h2>
        <h1 className="font-extrabold text-5xl bg-gradient-to-r from-[#304BFF] to-[#00CDAC] text-transparent bg-clip-text inline-block drop-shadow-md">
          Developer
        </h1>
        <p className="mx-4 font-light text-2xl text-center">
          I build products in search of three principles: aesthetics,
          functionality, and scalability
        </p>
        <div className="flex w-[60dvw] justify-between ml-6">
          <button className="bg-black text-white rounded-3xl py-2 px-4">
            Projects
          </button>
          <button className="bg-black text-white rounded-3xl py-2 px-4">
            Contact Me
          </button>
        </div>
        <div className="flex gap-x-6">
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
