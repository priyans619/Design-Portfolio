import React from 'react';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="items-center justify-center text-center bg-[#0e0e0e] w-full h-full md:pb-8 px-4 pb-20">
      <footer className="font-normal text-white text-md flex items-center justify-center">
        Copyright @ Priyansh Bhardwaj {currentYear}.
      </footer>
    </div>
  );
};

export default Footer;
