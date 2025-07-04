import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-5xl bg-black mx-auto px-4 py-24">
      <div className=" max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        {/* Left side */}
        <div className="text-sm text-gray-300">
          2025 © FI & I ® AI Agency Inc.
        </div>

        {/* Right side links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-300">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">S1</a>
          <a href="#" className="hover:underline">S2</a>
          <a href="#" className="hover:underline">404</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>

      <hr className="border-t border-gray-800 my-6" />

      <div className="text-center text-sm text-gray-500">
        Powered by <span className="font-medium text-white">FI & I</span> ● Created by <span className="text-white font-medium">ALL-ROUNDER</span>
      </div>
    </footer>
  );
};

export default Footer;
