// File: src/components/Navbar.jsx
import React from 'react';
// import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-8 py-3 flex items-center justify-between gap-8 shadow-lg border border-white/10 w-[90%] max-w-7xl">
      <div className="flex items-center bg-[#bfe500c1] hover:bg-[#c0e500] transition duration-200 rounded-s-lg rounded-bl-3xl rounded-tr-3xl px-3 py-2">
        <span className="text-black font-semibold text-2xl  pt-2 pb-2 pr-5 pl-4"
         style={{
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 800,
  }}
        >FI&I ®</span>
        
      </div>

        <div className="flex items-center bg-neutral-800 rounded-full px-6 py-2 space-x-6 text-white text-xl font-medium">
        <a href="#services" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">Services</a>
        <a href="#pricing" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">Pricing</a>
        <a href="#case-studies" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">Case studies</a>
        <a href="#team" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">Team</a>
        <a href="#faq" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300">FAQ</a>
        <button className="ml-4 px-4 py-2 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-500 hover:text-white transition-all duration-200">Buy now</button>
      </div>
    </header>
  );
};

export default Navbar;
