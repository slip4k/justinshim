import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="z-10 w-[100dvw] bg-gradient-to-br from-[#1b263b] to-[#415a77] text-background">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className="transition hover:text-gray-700/75" href="/resume.pdf">
              {' '}
              Resume{' '}
            </a>
          </li>

          <li>
            <a className=" transition hover:text-gray-700/75" href="#about">
              {' '}
              About{' '}
            </a>
          </li>

          <li>
            <a className=" transition hover:text-gray-700/75" href="#skills">
              {' '}
              Skills{' '}
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#projects">
              {' '}
              Projects{' '}
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-700/75" href="#contact">
              {' '}
              Contact{' '}
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
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
        </ul>
      </div>
      <p className="text-center">
        &copy; {currentYear} Justin Shim All Rights Reserved.
      </p>
    </footer>
  );
}
