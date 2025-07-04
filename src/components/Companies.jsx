import React from 'react';

const companies = [
  { name: 'Tarscase', font: 'font-bold', style: {} },
  { name: 'MINE WORK', font: 'italic font-serif', style: {} },
  { name: 'OPJE', font: 'font-bold', style: {} },
  { name: 'OLD YO', font: 'tracking-widest font-medium', style: {} },
  { name: 'Hamilton', font: 'font-light', style: {} },
  { name: '✍︎', font: 'text-3xl', style: { fontFamily: 'cursive' } }, // signature-like
];

const Companies = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 leading-tight tracking-tight">
      <div className=" mx-auto text-start">
        <p className="text-white text-sm mb-6" style={{
            fontFamily: '"Inter", sans-serif;',
        }}>Trusted by high-performing companies</p>
        <div className="flex flex-wrap justify-start items-start gap-10">
          {companies.map((company, idx) => (
            <span
              key={idx}
              className={`text-white text-xl md:text-2xl lg:text-3xl ${company.font}`}
              style={company.style}
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
