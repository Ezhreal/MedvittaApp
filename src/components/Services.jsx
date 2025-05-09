import React from "react";

// Ajuste os caminhos das imagens conforme necessário
import doctorImg from "../assets/doctor-smile.webp"; // Substitua pelo nome correto
import patientImg from "../assets/patient-smile.webp"; // Substitua pelo nome correto
import googleG from "../assets/google-g.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import dnaBG from '../assets/dna-bg.webp';


const Services = () => {  
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "+34605490427"; // Número de telefone com código do país
    const message = "I'd like to book an appointment, please.."; // Mensagem inicial opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  return (
  
    <section className="w-full py-8 md:py-16 px-4 bg-white flex flex-col items-center bg-no-repeat" 
    style={{ backgroundImage: `url(${dnaBG})`, backgroundPosition: 'bottom' }}>
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* Coluna Esquerda */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4 md:gap-8 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">General Practitioners</h2>
          <p className="text-[#173F88] text-sm md:text-base font-medium leading-snug">
            A general practitioner is the doctor responsible for addressing patients' general health needs, providing initial diagnoses, treatments, and guidance for disease prevention. For more complex cases, the general practitioner refers the patient to a specialist.
          </p>
          <p className="text-gray-600 text-xs md:text-sm mt-2">
            At MedVitta, our general practitioners are highly qualified and ready to offer personalized and efficient care.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center bg-[#2346a0] cursor-pointer text-white px-4 py-6 rounded-full hover:bg-blue-800 transition text-base mt-4 md:mt-8 min-w-[300px] h-[48px]"
          >
            <span className="flex-1 text-left">Book an appointment</span>
            <span className="flex items-center justify-center ml-4 w-8 h-8 rounded-full border-2 border-[#F1E762] ">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#F1E762] text-lg" />
            </span>
          </button>
        </div>
        {/* Coluna Direita */}
        <div className="hidden md:flex flex-1 flex-row items-start justify-center gap-8 max-w-xl">
          {/* Imagem do médico */}
          <img src={doctorImg} alt="Doctor smiling" className="w-[316px] h-[430px] object-cover rounded-2xl shadow" />
          {/* Bloco da paciente com selo Google */}
          <div className="flex flex-col items-center gap-3 relative">
            {/* Selo Google */}
            <div className="mb-2 bg-white rounded-xl shadow-lg flex items-center gap-2 px-4 py-2 border border-gray-100 self-start">
              <img src={googleG} alt="Google" className="h-7 w-7" />
              <div className="flex flex-col text-xs">
                <span className="font-bold text-gray-800 flex items-center gap-1"><span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> (5)</span>
                <span className="text-gray-500">12k+ ratings on google</span>
              </div>
            </div>
            <img src={patientImg} alt="Patient smiling on phone" className="w-[316px] h-[430px] object-cover rounded-2xl shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
