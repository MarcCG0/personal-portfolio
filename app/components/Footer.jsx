import React from "react";

const Footer = () => {
  return (
    
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <span>
      <img src="/images/favicon.png" className="logo-class" style={{ width: '40px', height: '40px' }} alt="Logo" />
        </span>
        <p className="text-slate-600">Marc Camps Garreta © 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
