import Image from 'next/image';

export default function About() {
  return (
    <div className="w-full mt-[300px] z-10">
      <h1 className="text-left text-9xl">About</h1>
      <hr className="border-b-4 border-foreground flex-grow" />
      <div className="flex justify-center items-center">
        <div className="w-full grid grid-cols-2 items-center">
          <div className="text-xl font-light">
            <div className="mt-8">
              Hello! I&apos;m Justin, a product-centric developer with a passion
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
              My expertise spans Next.js, TypeScript, React, Node, and Tailwind
              CSS, enabling me to engineer products that not only meet user
              needs but also adapt to evolving technological landscapes. Join me
              on my journey as I continue to build solutions where functionality
              meets innovation.
            </div>
            <button className="p-4 mt-8 bg-foreground text-background rounded-full">
              Resume
            </button>
          </div>
          <div className="p-2 flex justify-center border-foreground">
            <Image
              className="rounded-xl"
              src={'/aboutphoto.jpg'}
              alt="A photo of Justin Shim"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
