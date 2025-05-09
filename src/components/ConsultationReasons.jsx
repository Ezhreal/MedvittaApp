import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import howitworksBg from '../assets/howitworks-bg.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
  {
    title: "Preventive Health Screenings",
    desc: "Comprehensive check-ups and specific tests including blood work, cardiovascular assessments, and diagnostic imaging.",
  },
  {
    title: "Chronic Condition Management",
    desc: "Ongoing care for diabetes, hypertension, high cholesterol, thyroid disorders, and asthma.",
  },
  {
    title: "Lifestyle Consultations",
    desc: "Professional guidance on nutrition, physical activity, sleep hygiene, and stress management techniques.",
  },
  {
    title: "Prescription Services",
    desc: "Issuance and renewal of medications for both acute conditions and long-term treatment plans.",
  },
  {
    title: "Medical Documentation",
    desc: "Official certificates for employment, school, insurance, fitness, and administrative requirements.",
  },
  {
    title: "Specialist Referrals",
    desc: "Direct connection to specialists when your condition requires more targeted care or advanced treatments.",
  },
];

const ConsultationReasons = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+34605490427"; // Número de telefone com código do país
    const message = "I'd like to book an appointment, please.."; // Mensagem inicial opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <section className="w-full py-10 md:py-16 px-4 bg-[#173F88] bg-no-repeat flex flex-col items-center" style={{ backgroundImage: `url(${howitworksBg})`, backgroundPosition: 'top' }}>
      <div className="w-full max-w-[1330px] flex flex-col items-center">
        <h2 
          data-aos="fade-up"
          data-aos-delay="50"
          className="text-2xl md:text-4xl font-bold text-white mb-2 text-center"
        >
          When to Consult a <span className="text-[#F1E762]">General Practitioner?</span>
        </h2>
        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white/90 text-sm md:text-lg mb-6 md:mb-10 text-center max-w-2xl"
        >
          Consult a doctor if you have symptoms of a possible illness and wish to treat them.
        </p>
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:gap-8 mb-6 md:mb-10">
          {/* Linhas verticais e horizontais com gradiente */}
          <div className="hidden md:block absolute left-1/3 top-0 h-full w-[2px] z-10" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 0%, #3b5cb8 50%, rgba(255,255,255,0.0) 100%)'}} />
          <div className="hidden md:block absolute left-2/3 top-0 h-full w-[2px] z-10" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 0%, #3b5cb8 50%, rgba(255,255,255,0.0) 100%)'}} />
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] z-10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.0) 0%, #3b5cb8 50%, rgba(255,255,255,0.0) 100%)'}} />
          {reasons.map((r, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={150 + (i * 50)}
              className="relative bg-black-25 bg-opacity-25 rounded-xl p-5 md:p-7 flex flex-col items-center text-center min-h-[140px] md:min-h-[160px] z-20"
            >
              <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F1E762] mb-2 md:mb-3">
                <FontAwesomeIcon icon={faCheck} className="text-[#1d388a] text-sm md:text-lg" />
              </span>
              <h3 className="font-bold text-white text-sm md:text-base mb-1">{r.title}</h3>
              <p className="text-blue-100 text-xs md:text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
        <button
          data-aos="fade-up"
          data-aos-delay="450"
          onClick={handleWhatsAppClick}
          className="bg-[#F1E762] text-[#173F88] font-medium flex items-center cursor-pointer px-4 py-6 rounded-full hover:bg-yellow-400 transition text-base mt-4 md:mt-8 min-w-[280px] md:min-w-[300px] h-[48px]"
        >
          <span className="flex-1 text-left">Book an appointment</span>
          <span className="flex items-center justify-center ml-4 w-8 h-8 rounded-full border-2 border-[#2346a0]">
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2346a0] text-lg" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ConsultationReasons;
