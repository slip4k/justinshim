import { Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-[100dvw] sticky top-0 mb-8 bg-slate-100/80 z-10  drop-shadow-md">
      <div className="font-black text-5xl m-6">js</div>
      <div className="m-6">
        <Menu color="#000000" size={36} />
      </div>
    </nav>
  );
}
