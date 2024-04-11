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

  const scrollToBottom = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth', // Optional: defines the transition animation
        block: 'start', // Optional: aligns the element at the top of the view
      });
    }
  };

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Optional: defines the transition animation
        block: 'start', // Optional: aligns the element at the top of the view
      });
    }
  };

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
                <button
                  className="hover:scale-105 mt-4 text-foreground"
                  onClick={() => {
                    scrollTo('about');
                    setOpen(false);
                  }}
                >
                  About
                </button>
                <button
                  className="hover:scale-105 mt-4 text-foreground"
                  onClick={() => {
                    scrollTo('skills');
                    setOpen(false);
                  }}
                >
                  Skills
                </button>
                <button
                  className="hover:scale-105 mt-4 text-foreground"
                  onClick={() => {
                    scrollTo('projects');
                    setOpen(false);
                  }}
                >
                  Projects
                </button>
                <button
                  className="hover:scale-105 bg-foreground text-background p-2 rounded-lg mt-4 mb-4"
                  onClick={() => {
                    scrollTo('contact');
                    setOpen(false);
                  }}
                >
                  Contact Me
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            className="text-background mr-12 hover:underline"
          >
            Resume
          </a>
          <button
            onClick={() => scrollTo('about')}
            className="text-background mr-12 hover:underline"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-background mr-12 hover:underline"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="text-background mr-12 hover:underline"
          >
            Projects
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full bg-background text-foreground p-6 hover:bg-slate-300"
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
