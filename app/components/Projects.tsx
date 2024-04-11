import { Tabs } from './ui/tabs';
import Image from 'next/image';

const tabs = [
  {
    title: 'Creator Cards',
    value: 'creatorcards',
    content: (
      <div className="flex flex-col w-full h-[500px] overflow-hidden rounded-2xl p-10 text-xl md:text-4xl font-bold text-background bg-gradient-to-br from-[#1b263b] to-[#415a77]">
        <p className="mb-8">Creator Cards</p>

        <article className="w-[90%] overflow-hidden flex justify-center rounded-lg shadow transition hover:shadow-lg mx-auto">
          <Image
            className="h-full hidden lg:block"
            width={500}
            height={500}
            alt="A photo"
            src="/creatorcardspreview.png"
          />
          <div className="bg-background p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Creator Cards</h3>
            </a>
            <p className="mt-2 text-xs md:text-sm/relaxed text-gray-500 mb-4">
              Creator Cards is an all-in-one content management solution that
              provides no-code landing pages for creators to help facilitate
              their audience social pipelines.
            </p>
            <a
              className="text-lg font-normal mt-8 p-3 rounded-full bg-foreground text-background"
              href="https://creatorcards.us"
            >
              Website
            </a>
          </div>
          <div className="bg-background p-4 sm:p-6 border-l border-foreground w-[30rem]">
            <p className="mb-8 text-gray-900">Techs used:</p>
            <div className="grid grid-cols-2 gap-y-6">
              <Image
                src={'/tscolorlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/nextcirclelogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/reactcolorlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/gitlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/prismalogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/tailwindlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
            </div>
          </div>
        </article>
      </div>
    ),
  },
  {
    title: 'Next Engine Optimization',
    value: 'neo',
    content: (
      <div className="flex flex-col w-full h-[500px] overflow-hidden rounded-2xl p-10 text-xl md:text-4xl font-bold text-background bg-gradient-to-br from-[#1b263b] to-[#415a77]">
        <p className="mb-8">Next Engine Optimization</p>

        <article className="w-[90%] overflow-hidden flex justify-center rounded-lg shadow transition hover:shadow-lg mx-auto">
          <Image
            className="h-full hidden lg:block"
            width={500}
            height={500}
            alt="A photo"
            src="/neopreview.png"
          />
          <div className="bg-background p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">
                Next Engine Optimization
              </h3>
            </a>
            <p className="mt-2 text-xs md:text-sm/relaxed text-gray-500 mb-4">
              Next Engine Optimization (NEO) is a vsCode extension that delivers
              SEO metrics on content load times of any given page in their
              Next.js application.
            </p>
            <a
              className="text-lg font-normal mt-8 p-3 rounded-full bg-foreground text-background"
              href="https://next-metrics.vercel.app"
            >
              Website
            </a>
          </div>
          <div className="bg-background p-4 sm:p-6 border-l border-foreground w-[30rem]">
            <p className="mb-8 text-gray-900">Techs used:</p>
            <div className="grid grid-cols-2 gap-y-6">
              <Image
                src={'/tscolorlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/nextcirclelogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/reactcolorlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/gitlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/tailwindlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
            </div>
          </div>
        </article>
      </div>
    ),
  },
  {
    title: 'Body X Chiro',
    value: 'bodyxchiro',
    content: (
      <div className="flex flex-col w-full h-[500px] overflow-hidden rounded-2xl p-10 text-xl md:text-4xl font-bold text-background bg-gradient-to-br from-[#1b263b] to-[#415a77]">
        <p className="mb-8">Body X Chiro</p>

        <article className="w-[90%] overflow-hidden flex justify-center rounded-lg shadow transition hover:shadow-lg mx-auto">
          <Image
            className="h-full hidden lg:block"
            width={500}
            height={500}
            alt="A photo"
            src="/bodyxchiropreview.png"
          />
          <div className="bg-background p-4 sm:p-6">
            <a href="#">
              <h3 className="mt-0.5 text-lg text-gray-900">Body X Chiro</h3>
            </a>

            <p className="mt-2 text-xs md:text-sm/relaxed text-gray-500 mb-4">
              Body X Chiro is a Chiropractic office run by Dr. Christine Huynh,
              and I had the pleasure of designing and developing the website for
              the practice.
            </p>
            <a
              className="text-lg font-normal mt-8 p-3 rounded-full bg-foreground text-background"
              href="https://bodyxchiro.com"
            >
              Website
            </a>
          </div>
          <div className="bg-background p-4 sm:p-6 border-l border-foreground w-[30rem]">
            <p className="mb-8 text-gray-900">Techs used:</p>
            <div className="grid grid-cols-2 gap-y-6">
              <Image
                src={'/tscolorlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/nextcirclelogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/reactcolorlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/gitlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
              <Image
                src={'/tailwindlogo.png'}
                alt="TS Logo"
                width={48}
                height={48}
              />
            </div>
          </div>
        </article>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <div id="projects" className="w-full h-full mt-36 lg:mt-96 z-10 mb-[30rem]">
      <h1 className="text-left text-7xl lg:text-9xl">Projects</h1>
      <hr className="border-b-4 border-foreground flex-grow" />
      <div className="mt-8">
        <Tabs tabs={tabs}></Tabs>
      </div>
    </div>
  );
}
