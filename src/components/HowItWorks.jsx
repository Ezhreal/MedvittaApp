import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import doctorsImg from "../assets/howitworks-doctors.webp";
import howitworksBg from "../assets/howitworks-bg.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full flex justify-center items-center bg-[#173F88] bg-no-repeat min-h-[420px] py-0 px-0 overflow-visible" style={{minHeight: '420px', backgroundImage: `url(${howitworksBg})`, backgroundPosition: 'top'}}>
      {/* Background pattern à esquerda */}
      <div className="relative w-full max-w-[1330px] flex flex-col md:flex-row items-stretch justify-between z-10 px-4 md:px-0" style={{minHeight: '420px'}}>
        {/* Bloco azul com padrão e conteúdo */}
        <div className="relative flex-1 flex flex-col justify-center md:pl-8 md:pr-4 py-8 md:py-12 w-full md:w-3/5">
          <div className="relative z-10">
            <h2 
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-2xl md:text-4xl font-bold text-white mb-2 text-left"
            >
              How it <span className="text-[#F1E762]">Works</span>
            </h2>
            <p 
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-white text-sm md:text-base max-w-lg mb-6 text-left"
            >
              Our telemedicine service provides a seamless healthcare experience from the comfort of your home. After booking your consultation with one of our qualified physicians, you'll connect via your preferred communication method for a thorough assessment of your health concerns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 md:gap-y-4 w-full max-w-xl">
              {[
                { text: "Secure Digital Delivery" },
                { text: "Digital Signatures" },
                { text: "Flexible Consultation Options" },
                { text: "Immediate Document Access" }
              ].map((item, i) => (
                <div 
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={300 + (i * 100)}
                  className="flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faCheck} className="text-[#F1E762] text-base md:text-lg" />
                  <span className="text-white font-semibold text-xs md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Imagem dos médicos */}
        <div 
          data-aos="fade-left"
          data-aos-delay="700"
          className="flex items-end justify-center md:justify-end relative z-20 mt-6 md:mt-0 w-full md:w-2/5" 
        >
          <img 
            src={doctorsImg} 
            alt="Doctors" 
            className="w-full max-w-[280px] md:max-w-lg lg:max-w-xl object-contain relative -mt-10 md:-mt-20" 
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
