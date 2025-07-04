import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the monthly subscription model work?',
    answer: 'You pay a fixed monthly fee and get ongoing AI support and services. No hidden charges or surprises.'
  },
  {
    question: 'How does the 100% money-back guarantee work?',
    answer: 'If you’re not satisfied in the first 14 days, we’ll refund your payment—no questions asked.'
  },
  {
    question: 'What is business process automation, and how can it benefit my company?',
    answer: 'It’s automating repetitive tasks to save time, reduce errors, and free up your team for high-value work.'
  },
  {
    question: 'How does  FI & I AI integrate AI into my company\'s existing data systems?',
    answer: 'We use APIs and connectors to seamlessly sync with your existing tools and CRMs.'
  },
  {
    question: 'Can FI & I AI develop custom AI-powered apps for my business?',
    answer: 'Yes, we develop tailored apps to fit your business workflow, with AI agents, bots, and automation.'
  },
  {
    question: 'Do you offer consultations to identify the best AI solutions for my business?',
    answer: 'Absolutely. We start every engagement with a strategy session to define the best-fit solutions.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl text-white bg-black mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto text-start">
        <h2 className="text-4xl font-bold mb-4">FAQ</h2>
        <p className="text-gray-200 mb-8 text-sm">
          Do you have more questions? We have prepared <br /> some answers for you. But if you need more, <br /> just <a href="#" className="underline text-gray-200 hover:text-gray-500">Book a call</a> or mail us <a href="mailto:hey@fii.ai" className="underline text-gray-200 hover:text-gray-500">hey@fii.ai</a>
        </p>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-[#1b1b1b] rounded-xl overflow-hidden transition-all duration-300`}
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-neutral-800 transition"
              >
                <span className="text-sm md:text-base font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-sm text-gray-300 transition">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
