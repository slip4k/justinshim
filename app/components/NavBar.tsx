'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <nav className="flex sm:px-12 lg:px-24 justify-between items-center w-[100dvw] mb-8 bg-slate-100/80 z-10  drop-shadow-md">
      <div className="font-black text-5xl m-6">js</div>
      <div className="m-6 relative" id="dropdown" ref={menuRef}>
        <button onClick={() => setOpen(!open)}>
          <Menu
            className="hover:cursor-pointer z-10"
            color="#000000"
            size={36}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`absolute z-20 w-48 flex flex-col items-center justify-between right-2 bg-slate-100 p-4 border rounded-lg text-xl font-semibold`}
            >
              <a
                className="hover:scale-105 mt-4"
                href="#projects"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
              <a
                className="hover:scale-105 bg-black text-slate-100 p-2 rounded-lg mt-4"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contact Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
