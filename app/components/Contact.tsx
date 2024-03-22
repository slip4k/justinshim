import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col h-[100dvh]">
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
      <footer>
        <p></p>
      </footer>
    </div>
  );
}
