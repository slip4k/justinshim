import Image from 'next/image';

const logos = [
  '/tscolorlogo.png',
  '/nextcirclelogo.png',
  '/reactcolorlogo.png',
  '/gitlogo.png',
  '/prismalogo.png',
  '/tailwindlogo.png',
];
const logoName = [
  'TypeScript',
  'Next.js',
  'React',
  'Git',
  'Prisma',
  'TailwindCSS',
];

export default function Skills() {
  return (
    <>
      <div className="w-full mt-96 z-10">
        <h1 className="text-left text-7xl lg:text-9xl">Skills</h1>
        <hr className="border-b-4 border-foreground flex-grow" />
        <div className="flex justify-center items-center">Hi</div>
      </div>
      {/* <div className="flex items-center md:w-[4000px] h-full  font-bold mt-2 mb-2 overflow-hidden">
        <div className="flex items-center animate-loop-scroll whitespace-nowrap">
          {logos.map((logo, index) => {
            return (
              <div key={index} className="mx-8">
                <Image src={logo} alt="logo image" width={409} height={250} />
                <p className="text-center text-xl mt-8">{logoName[index]}</p>
              </div>
            );
          })}
        </div>
        <div
          className="flex items-center animate-loop-scroll whitespace-nowrap"
          aria-hidden="true"
        >
          {logos.map((logo, index) => {
            return (
              <div key={index} className="mx-8">
                <Image src={logo} alt="logo image" width={409} height={250} />
                <p className="text-center text-xl mt-8">{logoName[index]}</p>
              </div>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
