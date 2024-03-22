export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-y-4 border rounded-md p-6 w-[80dvw] mt-10"
      action="submit"
    >
      <input
        className="bg-gray-200 drop-shadow-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-200"
        type="text"
        defaultValue="Name"
      />
      <input
        className="bg-gray-200 drop-shadow-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-200"
        type="text"
        defaultValue="Email"
      />
      <input
        className="bg-gray-200 drop-shadow-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-200"
        type="text"
        defaultValue="Subject"
      />
      <textarea
        className="bg-gray-200 drop-shadow-md appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-200"
        cols={1}
        rows={5}
        placeholder="Message..."
      ></textarea>
      <button className="bg-black text-white py-4 rounded-md">Submit</button>
    </form>
  );
}
