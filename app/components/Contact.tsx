import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <div className="w-full h-full mt-96 z-10">
        <h1 className="text-left text-7xl lg:text-9xl">Contact</h1>
        <hr className="border-b-4 border-foreground flex-grow" />
      </div>
      <div
        id="contact"
        className="flex flex-col h-[800px] pt-16 mt-24 relative"
      >
        <div className="flex flex-col justify-center items-center">
          <p className=" w-[80dvw] text-center text-2xl font-light mt-10">
            {' '}
            Contact me by email{' '}
            <a className="text-blue-600 dark:text-blue-500 hover:underline">
              justinjaeshim@gmail.com
            </a>{' '}
            or use the form below.
          </p>
          <div className="flex flex-col justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </div>
      <footer className="text-center flex flex-col items-center gap-y-10">
        <div className="flex gap-x-12">
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
        <a className="underline hover:cursor-pointer" href="#">
          Back to top
        </a>
        <p className="text-center">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </>
  );
}
