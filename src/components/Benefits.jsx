import React, { useEffect } from "react";
import imageBenefits from '../assets/benefits.webp'; // Certifique-se que o caminho está correto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import benefitsBg from '../assets/howitworks-bg.webp'; // Importe a imagem aqui
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 400, // Reduzido para 400ms
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      disable: 'mobile', // Desabilita em dispositivos móveis para melhor performance
    });
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+34605490427"; // Número de telefone com código do país
    const message = "I'd like to book an appointment, please.."; // Mensagem inicial opcional
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  const benefits = [
    { title: 'Experienced Doctors', desc: 'Our team consists of highly qualified and experienced medical professionals.' },
    { title: 'Advanced Technology', desc: 'We utilize the latest medical equipment and technology for accurate diagnoses and effective treatments.' },
    { title: 'Personalized Care', desc: 'We provide individualized treatment plans tailored to each patient\'s unique needs.' },
    { title: 'Comfortable Environment', desc: 'Our clinic offers a welcoming and comfortable atmosphere for a stress-free experience.' },
  ];

  return (
    <section
      className="w-full py-10 md:py-16 px-4 bg-[#173F88] bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage: `url(${benefitsBg})`, backgroundPosition: 'top' }} // Aplique o background image inline
    >
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-center gap-6 md:gap-6">
        {/* Imagem à esquerda */}
        <div 
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-delay="0"
          className="flex-1 flex gap-4 md:gap-8 justify-center items-center"
        >
          <img 
            src={imageBenefits} 
            alt="Imagem ilustrativa de benefícios médicos" 
            className="object-cover rounded-2xl w-full md:w-auto transition-transform duration-300 hover:scale-[1.02]" 
            loading="lazy"
            width={500}
            height={400}
          />
        </div>
        {/* Bloco de benefícios */}
        <div className="flex-1 flex flex-col gap-6 md:gap-6 items-center md:items-start justify-center w-full">
          <h2 
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="50"
            className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center md:text-left"
          >
            Benefits
          </h2>
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 md:gap-8 mb-6 md:mb-10">
            {/* Linhas verticais e horizontais com gradiente */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] z-10" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.0) 0%, #3b5cb8 50%, rgba(255,255,255,0.0) 100%)'}} />
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] z-10" style={{background: 'linear-gradient(90deg, rgba(255,255,255,0.0) 0%, #3b5cb8 50%, rgba(255,255,255,0.0) 100%)'}} />
            {benefits.map((b, i) => (
              <div 
                key={b.title} 
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-delay={100 + (i * 50)}
                className="relative bg-black-25 bg-opacity-25 rounded-xl p-5 md:p-7 flex flex-col items-center text-center min-h-[120px] md:min-h-[140px] z-20"
              >
                <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F1E762] mb-2 md:mb-3">
                  <FontAwesomeIcon icon={faCheck} className="text-[#1d388a] text-sm md:text-lg" />
                </span>
                <h3 className="font-bold text-white text-sm md:text-base mb-1">{b.title}</h3>
                <p className="text-blue-100 text-xs md:text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
          <button
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="300"
            onClick={handleWhatsAppClick}
            className="bg-[#F1E762] text-[#173F88] font-medium flex items-center cursor-pointer px-4 py-6 rounded-full hover:bg-yellow-400 transition text-base mt-4 md:mt-8 min-w-[280px] md:min-w-[300px] h-[48px]"
          >
            <span className="flex-1 text-left">Book an appointment</span>
            <span className="flex items-center justify-center ml-4 w-8 h-8 rounded-full border-2 border-[#2346a0]">
              <FontAwesomeIcon icon={faArrowRight} className="text-[#2346a0] text-lg" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;