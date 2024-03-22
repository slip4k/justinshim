import { Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 mx-5 w-[90dvw] sticky top-0 bg-slate-100/80 z-10 border border-[#85858559] rounded-xl m-5 drop-shadow-md">
      <div className="font-black text-5xl">js</div>
      <div>
        <Menu color="#000000" size={36} />
      </div>
    </nav>
  );
}
