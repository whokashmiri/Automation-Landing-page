import React from 'react';

const services = [
  {
    icon: '/icons/icon1.png',
    title: 'Business process automation',
    number: '1',
    description:
      'Let AI handle repetitive tasks and workflows. Improve efficiency, minimize errors, and free up time for strategic work, ultimately driving cost savings.',
  },
  {
    icon: '/icons/icon2.png',
    title: "Integrate AI into your company's data",
    number: '2',
    description:
      'Our AI automation services empower you to leverage data-driven automation, generate actionable insights, and use predictive analytics to support informed decision-making.',
  },
  {
    icon: '/icons/icon3.png',
    title: 'AI-powered apps development',
    number: '3',
    description:
      'We develop apps that deliver personalized, real-time insights and transform user experiences, including AI chatbots, image recognition for AR, and predictive analytics.',
  },

  {
    icon: '/icons/icon2.png',
    title: "AI automation consulting",
    number: '4',
    description:
      'Looking to find the best solution for your needs? We offer tailored consultations to provide custom solutions that align with your specific processes and industry requirements.',
  },
  {
    icon: '/icons/icon3.png',
    title: 'Generative AI integration',
    number: '5',
    description:
      'No more wasting hours on content creation − whether it’s copy, images, videos, or voiceovers. We streamline the process, enabling you to produce content up to 27x faster.',
  },
];

const floatingIcons = [
  { src: 'https://framerusercontent.com/images/irPNJxiMINwWuwNLiB8BSsLjgyk.jpg', className: 'top-[-40px] left-[10%] rotate-[10deg]' },
  { src: 'https://framerusercontent.com/images/r8NhJpulb3EzUpfmkXOcI2AxpcE.jpg', className: 'top-[-60px] left-[35%] rotate-[-6deg]' },
  { src: 'https://framerusercontent.com/images/7F76WvNtrpmvjKBksSLs5z8fUwI.jpg', className: 'top-[-70px] left-[55%] rotate-[15deg]' },
  { src: 'https://framerusercontent.com/images/IrZscLuksO5vtqfcjDeKyAGyE.jpg', className: 'top-[-50px] left-[75%] rotate-[-12deg]' },
  { src: 'https://framerusercontent.com/images/frts9WrSJVuhYPvvaRlDTk588I.jpg', className: 'top-[-30px] left-[85%] rotate-[20deg]' },
];

const Services = () => {
  return (
    <>
      {/* Embedded Tailwind utilities for animation */}
      <style jsx="true">{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>




<section className="relative max-w-5xl mx-auto bg-black text-white overflow-hidden py-24">
  {/* Floating Icons */}
  {floatingIcons.map((icon, i) => (
    <img
      key={i}
      src={icon.src}
      alt={`floating-icon-${i}`}
      className={`w-16 h-16 rounded-2xl mt-32 shadow-2xl shadow-black absolute animate-float ${icon.className}`}
    />
  ))}

  <div className="relative z-20 max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mt-10 ">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {services.map((service, idx) => (
        <div key={idx} className="relative">
          <div className="mt-4">
            <span className="text-gray-400 text-xl mb-1 block">
              {String.fromCharCode((9311 + idx)+ 1)}
            </span>
            <h2 className="font-semibold text-lg mb-2">{service.title}</h2>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
    </>
  );
};

export default Services;
