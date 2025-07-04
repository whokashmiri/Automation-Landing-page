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
    'Transform the way you work and take control of your business like never before',
    'Our intelligent no-code and code-based solutions help you automate time-consuming',
    'asks, optimize performance, and eliminate operational inefficiencies.',
    'Free up your time, boost productivity, and focus on what really drives success—while automation runs your workflows in the background.',
  ];

  // Combine all lines into one array with <br /> where needed
  const combinedText = fullText.flatMap((line, index) => {
    const chars = line.split('');
    return index < fullText.length - 1 ? [...chars, <br key={`br-${index}`} />] : chars;
  });

  return (
    <div className="max-w-5xl mx-auto py-12 font-bold text-[30px] md:text-[40px] lg:text-[42px] font-['Plus Jakarta Sans'] leading-tight tracking-tight" style={{
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
