import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import doctorFemale from "../assets/doctor-female.webp"; // Ajuste o nome se necessário
import dnaBG from "../assets/dna-bg.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const conditions = [
  {
    title: "Respiratory Conditions:",
    desc: "Colds, influenza, bronchitis, asthma, COVID-19.",
  },
  {
    title: "Digestive Issues:",
    desc: "Gastritis, colitis, constipation, stomach infections, food poisoning.",
  },
  {
    title: "Cardiovascular Diseases:",
    desc: "Hypertension, high cholesterol, arrhythmias.",
  },
  {
    title: "Metabolic Diseases:",
    desc: "Diabetes, obesity.",
  },
  {
    title: "Common Infections:",
    desc: "Urinary tract, tonsillitis, sinusitis, throat infections, dengue, Zika, chikungunya, pneumonia, conjunctivitis.",
  },
  {
    title: "STIs:",
    desc: "Syphilis. Trichomoniasis. HPV, HIV, gonorrhea, herpes, and hepatitis B.",
  },
  {
    title: "Mental Health Disorders:",
    desc: "Depression, burnout, anxiety.",
  },
  {
    title: "Musculoskeletal Problems:",
    desc: "Back pain, knee pain.",
  },
  {
    title: "Other Conditions:",
    desc: "Premature ejaculation, gynecological infections.",
  },
];

const ConditionsTreated = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full pt-10 md:pt-16 px-4 bg-white flex flex-col items-center overflow-visible  bg-no-repeat" 
    style={{ backgroundImage: `url(${dnaBG})`, backgroundPosition: 'bottom' }}>
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-center gap-6 md:gap-6 overflow-visible">
        <div className="flex-1 flex flex-col gap-6 md:gap-6 items-center md:items-start justify-center">     
    <div>
    <div 
          data-aos="fade-up" 
          data-aos-delay="50"
          className="mb-2 text-gray-400 font-semibold text-base md:text-lg"
        >
           Conditions We Treat
        </div>
        <h2 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="text-2xl md:text-4xl font-bold text-[#173F88] mb-4 md:mb-4 leading-tight md:text-left"
        >
         Primary Conditions Treated
        </h2>

        <p 
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-[#173F88] text-sm md:text-base font-medium mb-4 text-left"
          >
            At MedVitta, our general practitioners are prepared to treat a wide variety of conditions, including:
          </p>
    </div>
         
          
          <ul className="space-y-2 w-full">
            {conditions.map((c, i) => (
              <li 
                key={i} 
                data-aos="fade-right"
                data-aos-delay={400 + (i * 100)}
                className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
              >
                <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F1E762] mt-1 flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[#1d388a] text-xs md:text-sm" />
                </span>
                <span><span className="font-bold text-blue-900">{c.title}</span> {c.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div 
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex-1 flex gap-4 md:gap-8 justify-center items-center overflow-visible"
        >
          <img src={doctorFemale} alt="Doctor" className="w-full md:w-auto" style={{maxWidth:'100%',height:'auto'}} />
        </div>
      </div>
    </section>
  );
};

export default ConditionsTreated;
