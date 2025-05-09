import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#173F88]  py-16 px-4 flex flex-col items-center border-t border-gray-200">
      <div className="w-full max-w-[1330px] flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold text-[#173F88]  mb-2">Get in touch</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-6">
          {/* Telefone */}
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F1E762] ">
              <FontAwesomeIcon icon={faPhone} className="text-[#173F88]  text-2xl" />
            </span>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[#173F88] ">Call us</span>
              <span className="text-base">+ 55 34 605 49 04 27</span>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F1E762] ">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#173F88]  text-2xl" />
            </span>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[#173F88] ">Send us a Mail</span>
              <span className="text-base">medvittaeuropa@gmail.com</span>
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-gray-200 my-2" />
        <div className="text-center text-sm text-[#173F88]  mt-2">
          Copyright © 2024 – All rights reserved. Company Registration Number: 16284107
        </div>
      </div>
    </footer>
  );
};

export default Footer;
