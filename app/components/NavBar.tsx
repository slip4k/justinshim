import { Menu } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center p-6 mx-2 sticky top-0 w-full border border-black">
      <div className="font-black text-5xl">js</div>
      <div>
        <Menu color="#000000" size={36} />
      </div>
    </nav>
  );
}
