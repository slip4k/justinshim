import Image from 'next/image';
import { ArrowUpRightIcon } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full mt-96 z-10">
      <h1 className="text-left text-7xl lg:text-9xl">About</h1>
      <hr className="border-b-4 border-foreground flex-grow" />
      <div className="flex justify-center items-center">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 justify-center items-center">
          <div className="flex flex-col items-center lg:items-start text-xl font-light mb-8 lg:mb-0 lg:pl-8">
            <div className="mt-8  xl:mt-0">
              Hi! I&apos;m Justin, a product-centric developer with a passion
              for building applications that are not only aesthetic and
              functional but also easily scalable. With a background in
              open-source, my contributions have enhanced the Next.js ecosystem
              by means of a developer extension for SEO metrics in Next Engine
              Optimization.
            </div>
            <br />
            <div className="mt-8">
              Currently, I&apos;m spearheading Creator Cards — a no-code
              platform designed for influencers to effortlessly craft landing
              pages, retrieve analytics, and provide an all-in-one solution to
              content management. Creator Cards aims to provide deep
              customization without sacrificing accessibility embodying my
              commitment to delivering user-focused and data-driven solutions.
            </div>
            <br />
            <div className="mt-8">
              I have quite a few hobbies, but I mainly spend my leisure time
              going to the gym, networking, or competitive eSports. Currently,
              I&apos;m training to run the OC half marathon in May! Wish me luck
              :).
            </div>
            <button className="flex items-center justify-center p-4 mt-8 bg-foreground text-background rounded-full w-full lg:w-48">
              Resume
              <ArrowUpRightIcon></ArrowUpRightIcon>
            </button>
          </div>
          <div className="p-2 lg:ml-16 flex justify-center border-foreground">
            <article className="h-3/4">
              <Image
                alt=""
                src="/aboutphoto.jpg"
                className="h-3/4 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                width={500}
                height={500}
              />

              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Exploring a temple in Nara, Japan!
                </h3>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Any expatriates?
                </p>
              </div>
            </article>
            {/* 
            <Image
              className="rounded-xl"
              src={'/aboutphoto.jpg'}
              alt="A photo of Justin Shim"
              width={700}
              height={700}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
