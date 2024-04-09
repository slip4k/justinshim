import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col h-[800px] pt-16 mt-24 relative"
      >
        {/* <div className="absolute top-48 -z-10 -left-6 w-60 h-60 bg-[#34a0a4] rounded-full mix-blend-multiply filter blur-2xl opacity-50 transform-gpu animate-blob"></div>
      <div className="absolute bottom-12 -z-10 -left-4 w-72 h-72 bg-[#52b69a] rounded-full mix-blend-multiply filter blur-2xl opacity-50 transform-gpu animate-blob"></div>
      <div className="absolute top-72 -z-10 -right-4 w-60 h-60 bg-[#168aad] rounded-full mix-blend-multiply filter blur-2xl opacity-50 transform-gpu animate-blob"></div> */}
        <h1 className="font-black text-6xl text-center">Contact</h1>
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
