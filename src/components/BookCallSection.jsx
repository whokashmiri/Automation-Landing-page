import React from 'react';

const BookCallSection = () => {
  return (
    <section className=" max-w-5xl bg-black mx-auto px-4 py-24 text-white">
      <div className="max-w-5xl mx-auto text-left mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Still not sure?</h2>
        <p className="text-gray-400 max-w-lg">
          Contact us to learn more about fii AI Automation Agency and figure out how your team can change the way they work with AI
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <button
        className="w-full bg-white text-black text-5xl font-semibold px-6 py-20 rounded-[2rem] shadow-md hover:scale-[1.01] transition-transform duration-300"
         >
         Book call
         </button>
        </div>


      <p className="text-center mt-6 text-sm text-gray-400">
        or mail us at <a href="mailto:hey@fii.ai" className="underline hover:text-gray-200">hey@fii.ai</a>
      </p>
    </section>
  );
};

export default BookCallSection;
