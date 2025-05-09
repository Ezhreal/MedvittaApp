import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import nurseImg from '../assets/nurse-profile.webp';
import bgNurse from '../assets/nurse-bg.webp';

const skills = [
  "Executive training in Business Management, with an emphasis on strategic leadership and corporate innovation.",
  "Solid experience in the administration of medical practices, healthtech companies, and integrated healthcare operations.",
  "Distinguished performance in the expansion and structuring of businesses in Brazil and the European market.",
  "Development and implementation of digital solutions focused on efficiency, scalability, and organisational impact."
];

const NurseProfile = () => {
  return (
    <section
      className="w-full py-0 px-0 flex flex-col items-center"
      style={{
        backgroundImage: `url(${bgNurse})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-end gap-6 md:gap-6 px-4">
        {/* Conteúdo à esquerda */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center py-8 md:py-16 gap-4 md:gap-6 order-2 md:order-1">
          <h2
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-2xl md:text-4xl font-bold text-[#173F88] mb-2 text-left"
          >
            Fernanda Alfonsin
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-gray-700 text-sm md:text-base mb-2 text-left"
          >
            A natural-born leader, she is driven by purpose and a forward-looking vision, focusing on digital management, strategy, and healthcare innovation. As founder and partner of companies in Brazil and MedVitta Europe, her analytical approach leverages processes and digital solutions to ethically drive businesses with excellence and tangible impact.
          </p>
          <div className="w-full border-t border-dashed border-gray-300 my-2" />
          <span
            data-aos="fade-right"
            data-aos-delay="400"
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
                className="flex items-start gap-2"
              >
                <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#F1E762] mt-1 flex-shrink-0">
                  <FontAwesomeIcon icon={faCheck} className="text-[#1d388a] text-sm md:text-base" />
                </span>
                <span className="text-gray-800 font-semibold text-sm md:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Imagem à direita */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex-1 flex flex-col items-center justify-center relative order-1 md:order-2"
        >
          <img src={nurseImg} alt="Foto de Fernanda Alfonsin, executiva de saúde" className="w-full object-contain z-10 max-w-[420px] md:max-w-[480px]" loading="lazy" width={420} height={600} />
        </div>
      </div>
    </section>
  );
};

export default NurseProfile; 