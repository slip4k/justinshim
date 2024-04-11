'use client';
import { TypeAnimation } from 'react-type-animation';

export default function Typewriter() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1800, // wait 1s before replacing "Mice" with "Hamsters"
        'Designer',
        1800,
        'Engineer',
        1800,
      ]}
      wrapper="span"
      speed={2}
      deletionSpeed={2}
      style={{
        display: 'inline-block',
        padding: '10px',
        backgroundImage: 'linear-gradient(to bottom right, #304BFF, #00CDAC)',
        WebkitBackgroundClip: 'text', // For Safari
        backgroundClip: 'text',
        color: 'transparent',
      }}
      repeat={Infinity}
    />
  );
}
