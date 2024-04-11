import { Tabs } from './ui/tabs';
import Image from 'next/image';

const tabs = [
  {
    title: 'Creator Cards',
    value: 'creatorcards',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-background bg-gradient-to-br from-[#1b263b] to-[#415a77]">
        <p>Creator Cards</p>

        <a href="#" className="h-full group relative block bg-black">
          <Image
            width={1920}
            height={1080}
            alt="A photo"
            src="/aboutphoto.png"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Tony Wayne
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    ),
  },
  {
    title: 'Next Engine Optimization',
    value: 'neo',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1b263b] to-[#415a77]">
        <p>Next Engine Optimization</p>
      </div>
    ),
  },
  {
    title: 'Body X Chiro',
    value: 'bodyxchiro',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1b263b] to-[#415a77]">
        <p>Body X Chiro</p>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <>
      <div className="w-full h-full mt-96 z-10">
        <h1 className="text-left text-7xl lg:text-9xl">Projects</h1>
        <hr className="border-b-4 border-foreground flex-grow" />
        <div className="mt-8">
          <Tabs tabs={tabs}></Tabs>
        </div>
      </div>
    </>
  );
}
