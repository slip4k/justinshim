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
    <nav className="flex p-2 justify-between items-center rounded-full w-full mb-8 bg-foreground z-10 mt-4 drop-shadow-md">
      <div className="font-black text-5xl ml-8 text-background">js</div>
      <div className="relative" id="dropdown" ref={menuRef}>
        <div className="flex items-center md:hidden mr-8">
          <button onClick={() => setOpen(!open)}>
            <Menu
              className="hover:cursor-pointer z-10"
              color="#ffffff"
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
                className={`absolute z-20 w-48 flex flex-col items-center justify-between top-8 right-8 bg-background p-4 border rounded-lg text-xl font-semibold`}
              >
                <a
                  className="hover:scale-105 mt-4 text-foreground"
                  href="#projects"
                  onClick={() => setOpen(false)}
                >
                  Projects
                </a>
                <a
                  className="hover:scale-105 bg-foreground text-background p-2 rounded-lg mt-4"
                  href="#contact"
                  onClick={() => setOpen(false)}
                >
                  Contact Me
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden md:block">
          <button className="text-background ">Skills</button>
          <button className="text-background mx-12">Projects</button>
          <button className="rounded-full bg-background text-foreground p-6">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
