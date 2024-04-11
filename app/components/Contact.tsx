import ContactForm from './ContactForm';


export default function Contact() {
  return (
    <>
      <div id="contact" className="w-full h-full mt-96 z-10">
        <h1 className="text-left text-7xl lg:text-9xl">Contact</h1>
        <hr className="border-b-4 border-foreground flex-grow" />
      </div>
      <div className="h-full flex flex-col pt-16 relative">
        <div className="flex flex-col justify-center items-center">
          <p className=" w-[80dvw] text-center text-2xl font-light"></p>
          <div className="flex flex-col justify-center items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
