import ContactForm from './ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full h-full mt-96 z-10">
        <h1 className="text-left text-7xl lg:text-9xl">Contact</h1>
        <hr className="border-b-4 border-foreground flex-grow" />
      </div>
      <div className="flex flex-col h-[800px] pt-16 relative">
        <div className="flex flex-col justify-center items-center">
          <p className=" w-[80dvw] text-center text-2xl font-light">
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
    </>
  );
}
