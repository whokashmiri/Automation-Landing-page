import React, { useEffect, useRef } from 'react';

const HeroTextBlock = () => {
  const letterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('text-white', 'opacity-100');
            el.classList.remove('text-[#2a2a2a]', 'opacity-20');
          } else {
            el.classList.add('text-[#2a2a2a]', 'opacity-20');
            el.classList.remove('text-white', 'opacity-100');
          }
        });
      },
      { threshold: 0.7 }
    );

    letterRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      letterRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const fullText = [
    'Enhance your workflows to',
    'maximize performance and take',
    'effective control of your time.',
    'Focus on what truly your business ,',
    'while routine tasks run on autopilot with the help of our no-code and code-based solutions.',
  ];

  // Combine all lines into one array with <br /> where needed
  const combinedText = fullText.flatMap((line, index) => {
    const chars = line.split('');
    return index < fullText.length - 1 ? [...chars, <br key={`br-${index}`} />] : chars;
  });

  return (
    <div className="max-w-5xl mx-auto py-12 font-bold text-[48px] md:text-[40px] lg:text-[48px] font-['Plus Jakarta Sans'] leading-tight tracking-tight" style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      }}>
      {combinedText.map((char, i) =>
        typeof char === 'string' ? (
          <span
            key={i}
            ref={(el) => (letterRefs.current[i] = el)}
            className="inline-block transition-all duration-700 ease-in-out text-[#2a2a2a] opacity-20"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ) : (
          char
        )
      )}
    </div>
  );
};

export default HeroTextBlock;
