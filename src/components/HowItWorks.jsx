import React from 'react';
import ScrollTriggered from './Reordering';
import Reordering from './Reordering';

const steps = [
  {
    step: 'Step 1',
    title: 'Subscribe',
    description: `If our services is a good fit, start your subscription. Access your project board, and we’ll reach out the same day for a introductory discussion.`,
    link: { label: 'Plans & Pricing ↓', href: '#' },
    bg: 'bg-white',
    text: 'text-black',
    pill: 'bg-white text-black border border-black'
  },
  {
    step: 'Step 2',
    title: 'Share your vision',
    description: `Once we have your vision, we’ll analyse your goals, business requirements and constraints, break the project into bite-sized tasks, and start implementing.`,
    bg: 'bg-[#1a1a1a]',
    text: 'text-white',
    pill: 'bg-transparent text-white border border-white'
  },
  {
    step: 'Step 3',
    title: 'Continuous results',
    description:
      "Our team effectively solves your tasks and implements AI as a strategic asset, ensuring it becomes an integral part of your company's workflow.",
    bg: 'bg-[#1a1a1a]',
    text: 'text-white',
    pill: 'bg-black text-white border border-white'
  },
  {
    step: 'Step 4',
    title: 'Enjoy The Growth',
    description:
      "Our results drive your business growth, which is our main goal. We offer detailed instructions, training, and tech support as long as you need to maximize our work's value.",
    bg: 'bg-white',
    text: 'text-black',
    pill: 'bg-transparent text-black border border-black'
  }


  
];

const HowItWorks = () => {
  return (



    <section className="max-w-5xl mx-auto px-4 py-24">
  <div className="mx-auto">
    <h2 className="text-4xl text-white font-semibold mb-12 text-start">How it works?</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`
            ${step.bg} ${step.text}
            p-8 rounded-3xl w-full max-w-md shadow-md flex flex-col justify-between
            ${idx === 3 ? 'h-[500px]' : 'h-96'}
          `}
        >
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium w-fit mb-4 ${step.pill}`}
          >
            {step.step}
          </span>

          {idx === steps.length - 1 && <Reordering />}

          <div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed">
              {step.description}
              {step.link && (
                <a
                  href={step.link.href}
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  {' '}
                  {step.link.label}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default HowItWorks;
