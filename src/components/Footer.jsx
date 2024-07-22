import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#C4C4C1] dark:bg-[#111111] dark:text-gray-100 text-gray-900 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Created By <span className='text-[#421414] dark:text-[#e2e27d] font-bold text-xl'>Aaditya Nema</span> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
