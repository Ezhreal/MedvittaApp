import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import doctorImg from '../assets/doctor-profile.webp'; // ajuste o nome se necessário
import bgDoctor from '../assets/doctor-bg.webp'; // ajuste o nome se necessário


const skills = [
  "Specialisation in Digital Health from Harvard Medical School.",
  "Leadership in the management of medical groups and digital clinics.",
  "Expertise in Occupational Medicine with over 10 years of experience.",
  "Pioneering in the digital transformation and scaling of clinics.",
];

const DoctorProfile = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+34605490427"; // Número de telefone com código do país
    const message = "I'd like to book an appointment, please.."; // Mensagem inicial opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <section
      className="w-full py-0 px-0 flex flex-col items-center"
      style={{
        backgroundImage: `url(${bgDoctor})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-end gap-6 md:gap-6 px-4">
        {/* Médico à esquerda */}
        <div 
          data-aos="fade-right"
          data-aos-delay="100"
          className="flex-1 flex flex-col items-center justify-center relative"
        >
          <img src={doctorImg} alt="Foto do Dr. Gabriel Lafetá, médico ocupacional" className="w-full object-contain z-10" loading="lazy" width={420} height={600} />
          {/* Bloco de experiência */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="absolute left-0 bottom-4 md:bottom-8 bg-white rounded-2xl shadow-lg flex items-center gap-2 px-4 md:px-4 py-3 md:py-4 border border-gray-100 z-20" >
            <span className="text-[#173F88] font-bold text-2xl md:text-3xl">10+</span>
            <span className="text-gray-800 font-semibold text-sm md:text-base">Years<br />Experienced</span>
          </div>
        </div>
        {/* Conteúdo à direita */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center py-8 md:py-16 gap-6 md:gap-6">
          <h2 
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-2xl md:text-4xl font-bold text-[#173F88] mb-2 text-center md:text-left"
          >
            Dr. Gabriel Lafetá
          </h2>
          <p 
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-blue-800 text-sm md:text-lg font-semibold mb-1 text-left"
          >
            Graduated from Universidade Presidente Antônio Carlos, Juiz de Fora-MG and specializes in Occupational Medicine
          </p>
          <p 
            data-aos="fade-left"
            data-aos-delay="400"
            className="text-gray-700 text-sm md:text-lg mb-2 text-left"
          >
            Since 2014, he has been responsible for the MedVitta Group, which includes the MedVitta Medical Centre located in Montes Claros-MG, MedVitta Occupational, and MedVitta Online.
          </p>
          <div className="w-full border-t border-dashed border-gray-300 my-2" />
          <span 
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-[#173F88] font-bold text-sm md:text-base mt-2 mb-1 text-left"
          >
            About Skills
          </span>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-3 w-full mb-6">
            {skills.map((skill) => (
              <div
                key={skill}
                data-aos="fade-right"
                data-aos-delay={500}
                className="flex md:items-center gap-2"
              >
                <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#F1E762] mt-1 flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[#1d388a] text-sm md:text-base" />
                </span>
                <span className="text-gray-800 font-semibold text-sm md:text-base">{skill}</span>
              </div>
            ))}
          </div>
          <button
            data-aos="fade-left"
            data-aos-delay="1000"
            onClick={handleWhatsAppClick}
            className="flex items-center bg-[#2346a0] cursor-pointer text-white px-4 py-6 rounded-full hover:bg-blue-800 transition text-base mt-4 md:mt-8 min-w-[280px] md:min-w-[300px] h-[48px]"
          >
            <span className="flex-1 text-left">Book an appointment</span>
            <span className="flex items-center justify-center ml-4 w-8 h-8 rounded-full border-2 border-[#F1E762]">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#F1E762] text-lg" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
