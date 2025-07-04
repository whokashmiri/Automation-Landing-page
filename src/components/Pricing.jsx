import React from 'react';

const Pricing = () => {
  return (
    <section className=" max-w-5xl text-white bg-black mx-auto px-4 py-24">
      <div className=" mx-auto text-start">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-gray-400 mb-12 text-start mx-auto">
          One monthly fee, no surprises. Simple pricing with <br /> no hidden costs, just ongoing AI automation support when you need it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="bg-neutral-900 rounded-3xl p-10 text-left flex flex-col justify-between shadow-lg transition-transform duration-300 hover:scale-[1.015]">
            <div>
              <p className="text-sm mb-2 text-gray-400">Starter</p>
              <h2 className="text-4xl font-bold mb-1">3 899 USD</h2>
              <p className="text-sm text-gray-500 mb-6">per month</p>
              <button className="bg-white text-black rounded-md px-6 py-3 font-semibold mb-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
                Get started
              </button>
              <ul className="text-lg space-y-2 text-gray-300 list-disc list-inside">
                <li>Up to 2 projects at a time</li>
                <li>2–3 leading experts</li>
                <li>All services with limited code development</li>
                <li>Up to 45 min./week for calls</li>
                <li>Support on a first-come, first-served basis</li>
                <li>Monthly analytics report</li>
                <li>Slack + Asana ticketing system</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </div>
          </div>

          {/* Master Plan */}
          <div className="bg-white text-black rounded-3xl p-10 text-left flex flex-col justify-between shadow-lg transition-transform duration-300 hover:scale-[1.015]">
            <div>
              <p className="text-sm mb-2 text-gray-500">Master</p>
              <h2 className="text-4xl font-bold mb-1">13 899 USD</h2>
              <p className="text-sm text-gray-500 mb-6">per month</p>
              <button className="bg-lime-400 text-black rounded-md px-6 py-3 font-semibold mb-6 transform transition-transform duration-300 hover:scale-105 hover:bg-lime-300">
                Get started
              </button>
              <ul className="text-lg space-y-2 text-gray-700 list-disc list-inside">
                <li>Up to 6 projects at a time</li>
                <li>Entire team</li>
                <li>All services without limits</li>
                <li>Up to 120 min./week for calls</li>
                <li>Priority support in a way handy for you</li>
                <li>Weekly analytics report</li>
                <li>Slack + Asana ticketing system</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Offer Section */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-row md:flex-col items-start justify-start text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-white font-semibold text-xl">Custom offer</p>
            <p className="text-lg text-gray-400">Want fix pricing? Tell us more about your project</p>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition transform hover:scale-105 duration-300">
              Book call
            </button>
            <p className='text-gray-400'>or mail us at</p>
            <a href="mailto:hey@fii.ai" className="text-lg underline text-gray-300">hey@fii.ai</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
