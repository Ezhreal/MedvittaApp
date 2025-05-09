import React from "react";
import heroImg from "../assets/hero-doctors.webp";
import heroBg from "../assets/hero-bg.webp";
import logoMedvitta from "../assets/logo-medvittaeu.webp";
import googleG from "../assets/google-g.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import iconMed from "../assets/icon-med.webp";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+34605490427"; // Número de telefone com código do país
    const message = "I'd like to book an appointment, please.."; // Mensagem inicial opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
      className={`relative w-full min-h-[750px] flex justify-center overflow-hidden font-sans`}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 max-w-[1330px] w-full flex flex-col md:flex-row justify-between px-4">
        {/* Coluna Esquerda */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-8 max-w-xl py-16">
          <img src={logoMedvitta} alt="MedVitta Logo" className="h-20 mb-2" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
            <span className="block">BOOK YOUR</span>
            <span className="block">ONLINE MEDICAL</span>
            <span className="block text-blue-800">CONSULTATION</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-md text-center md:text-left">
            MedVitta Online offers personalized, quality care with the best in telemedicine technology
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center bg-[#2346a0] cursor-pointer text-white px-4 py-6 rounded-full hover:bg-blue-800 transition text-base mt-8 min-w-[300px] h-[48px]"
          >
            <span className="flex-1 text-left">Book an appointment</span>
            <span className="flex items-center justify-center ml-4 w-8 h-8 rounded-full border-2 border-[#F1E762] ">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#F1E762] text-lg" />
            </span>
          </button>
        </div>
        {/* Coluna Direita */}
        <div className="flex-1 flex items-end justify-center relative w-full">
          {/* Selo Google */}
          <div
            className="bg-white rounded-xl shadow-lg flex items-center gap-2 px-4 py-2 border border-gray-100 absolute top-1/2 right-0 z-20"
          >
            <img src={googleG} alt="Google" className="h-7 w-7" />
            <div className="flex flex-col text-xs">
              <span className="font-bold text-gray-800 flex items-center gap-1"><span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> (5)</span>
              <span className="text-gray-500">700+ ratings on google</span>
            </div>
          </div>
          {/* Imagem dos médicos */}
          <img src={heroImg} alt="Médicos" className="w-full" />
          {/* Box Top Rated */}
          <div className="bg-white rounded-xl shadow-lg flex items-center gap-2 px-4 py-2 border border-gray-100 absolute bottom-[30px] left-0 z-20">
            <img src={iconMed} alt="Icone Med" className="w-12 h-12" />
            <span className="text-gray-800 font-semibold text-sm">Top-Rated<br />Telemedicine Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
