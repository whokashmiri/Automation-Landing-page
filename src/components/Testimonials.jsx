import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    name: 'Melissa Lewis',
    role: 'CEO of Kinder Bench',
    image: 'https://images.pexels.com/photos/5125234/pexels-photo-5125234.jpeg',
    quote:
      'The FI & I team has changed our internal productivity for the better. We use automation for everything from childcare to ordering food for lunches.',
    reply: 'It was a pleasure to help 🤖',
  },
  {
    name: 'Daniel Kim',
    role: 'Co-founder of ProductWise',
    image: 'https://images.pexels.com/photos/3890524/pexels-photo-3890524.jpeg',
    quote:
      'FI & I helped us automate 40% of our support tickets using AI agents. Saved us time and money.',
    reply: 'We loved working with you!',
  },
  {
    name: 'Ava Smith',
    role: 'CTO at AutoCloud',
    image: 'https://images.pexels.com/photos/7582414/pexels-photo-7582414.jpeg',
    quote:
      'Their automation layer plugged right into our stack. Game changer for our growth ops.',
    reply: 'Thanks Ava! 🔧',
  }
];

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    slides: {
      perView: 1,
      spacing: 20,
    },
  });

  return (
    <section className="max-w-5xl text-white bg-black mx-auto px-4 py-24">
      <div className=" mx-auto text-start">
        <h2 className="text-4xl mr-5  font-bold mb-4">Testimonials</h2>
        <p className="text-gray-400 mb-12">
          Our services are loved by founders around the world. <br />
          We are proud to work with emerging talents, innovative startups and companies.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full h-[450px] bg-cover bg-center cursor-grab"
                style={{ backgroundImage: `url(${t.image})` }}
              >
                {/* Overlay fade from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text boxes moved to top-right */}
                <div className="absolute top-6 right-6 z-10 flex flex-col items-end gap-4 w-[90%] max-w-md">
             {/* Testimonial Quote Box (Black Glass) */}
                <div className="bg-black/30 backdrop-blur-2xl border border-white/10 text-white rounded-xl p-4 w-full shadow-inner text-left">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-300 mb-2">{t.role}</p>
                <p className="text-sm">{t.quote}</p>
                </div>

{/* Reply Box (White Glass) */}
                <div className="bg-white/20 backdrop-blur-2xl border border-white/20 text-white rounded-xl p-4 w-full shadow-inner text-left">
                <p className="text-xs font-semibold text-white/80 mb-1">Our reply</p>
                <p className="text-sm">{t.reply}</p>
                </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
