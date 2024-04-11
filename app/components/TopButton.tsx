'use client';
import { ArrowUp } from 'lucide-react';

export default function TopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Enable smooth scrolling
    });
  };

  return (
    <div className="fixed bottom-8 right-8  text-background  z-20">
      <button
        onClick={() => scrollToTop()}
        className="flex justify-center items-center hover:opacity-80 bg-foreground rounded-full p-4 "
      >
        <ArrowUp />
      </button>
    </div>
  );
}
