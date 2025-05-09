import React, { useEffect } from "react";
import imageAbout from '../assets/about.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      disable: 'mobile',
    });
  }, []);

  return (
    <section className="w-full py-10 md:py-16 px-4 bg-white flex flex-col items-center">
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-center gap-6 md:gap-6">
        {/* Coluna Esquerda */}
        <div className="flex-1 flex flex-col gap-6 md:gap-6 items-center md:items-start justify-center">
          <h2 
            data-aos="fade-right" 
            data-aos-duration="400"
            data-aos-delay="0"
            className="text-2xl md:text-4xl font-bold text-[#173F88] mb-2 text-center md:text-left"
          >
            About Medvitta
          </h2>
          <p 
            data-aos="fade-right" 
            data-aos-duration="400"
            data-aos-delay="50"
            className="text-[#173F88] text-sm md:text-lg font-medium text-center md:text-left"
          >
            MedVitta Online offers personalized, quality care with the best in telemedicine technology and various medical specialties in one place.
          </p>
          <p 
            data-aos="fade-right" 
            data-aos-duration="400"
            data-aos-delay="100"
            className="text-[#173F88] text-sm md:text-lg font-medium text-center md:text-left"
          >
            We have a skilled and committed team who work diligently to provide well-being and health to our clients—you are our greatest motivation.
          </p>
        </div>
        {/* Coluna Direita */}
        <div 
          data-aos="fade-left" 
          data-aos-duration="400"
          data-aos-delay="150"
          className="flex-1 flex gap-4 md:gap-8 justify-center items-center"
        >
          <img 
            src={imageAbout} 
            alt="Doctor" 
            className="w-full md:w-auto object-cover rounded-2xl transition-transform duration-300 hover:scale-[1.02]" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
