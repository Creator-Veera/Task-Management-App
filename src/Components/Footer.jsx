import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="container w-[98%] mx-auto shadow-md p-4 rounded-lg border border-gray-200">
      <div className=" flex flex-col md:flex-row justify-around items-center  gap-6">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Veeramani G</h2>
          <p className="text-md text-black mt-1">
            Building innovative and user-focused web applications with passion and precision.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Creator-Veera"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/veeramani0707"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:veeramaniishere@gmail.com"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        <span>&copy;</span> {new Date().getFullYear()} Veeramani G | Connect the world together
      </div>
    </footer>
    
  );
};

export default Footer;