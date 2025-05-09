import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import doctorsImg from '../assets/testimonials-doctors.webp'; // ajuste o nome se necessário
import googleG from '../assets/google-g.webp';
import dnaBG from '../assets/dna-bg.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: "Joni Bertolini Teixeira",
    text: "Excellent service, very polite, quick, efficient, and high-quality. I am grateful for the service!",
    rating: 5,
  },
  {
    name: "João Marcos M. S.",
    text: "Quick, efficient, and very straightforward service, no fuss. Recommended.",
    rating: 5,
  },
  {
    name: "BRUNO CARDOSO",
    text: "A very good experience; excellent, efficient, and quick service.",
    rating: 5, // Assuming a 5-star rating
  },
  {
    name: "Lindse Gelinski",
    text: "The service was very efficient, and the staff were very kind.",
    rating: 5, // Assuming a 5-star rating
  },
  {
    name: "Fran Lima",
    text: "I had a very positive experience; agile and efficient service. They resolved my issue!",
    rating: 5, // Assuming a 5-star rating
  },
  {
    name: "LPS Emmy Studios",
    text: "Excellent service: quick, efficient, efficacious, and effective. I needed a consultation, and the service was prompt. Well done.",
    rating: 5, // Assuming a 5-star rating
  },
  {
    name: "Valued MedVitta Customer", // Placeholder for the last testimonial without a specific name provided in the latest batch
    text: "For me, it has always been extremely useful and efficient; quick, trustworthy service. I have no complaints; on the contrary, I'd recommend them without hesitation. This must be the fifth time I've used MedVitta.",
    rating: 5, // Assuming a 5-star rating
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="w-full px-4 bg-white flex flex-col items-center  bg-no-repeat" 
    style={{ backgroundImage: `url(${dnaBG})`, backgroundPosition: 'bottom' }}>
      <div className="w-full max-w-[1330px] flex flex-col md:flex-row items-center gap-6 md:gap-6">
        {/* Depoimento à esquerda */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 md:gap-6 max-w-xl py-8 md:py-16">
          <h2 
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-bold text-[#173F88] mb-2 text-center md:text-left"
          >
            What our patient say
          </h2>
          <FontAwesomeIcon 
            data-aos="fade-right"
            data-aos-delay="200"
            icon={faQuoteLeft} 
            className="text-[#F1E762] text-2xl md:text-3xl mb-2" 
          />
          <p 
            data-aos="fade-right"
            data-aos-delay="300"
            className="text-gray-400 italic text-sm md:text-lg mb-2 text-center md:text-left"
          >
            {t.text}
          </p>
          <span 
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-[#173F88] font-bold text-sm md:text-base mt-2 mb-1 text-center md:text-left"
          >
            {t.name}
          </span>
          <div className="w-full border-t border-dashed border-gray-300 my-2" />
          <div 
            data-aos="fade-right"
            data-aos-delay="500"
            className="flex items-center gap-1 mb-2"
          >
            {[...Array(t.rating)].map((_, i) => (
              <FontAwesomeIcon key={t.name + '-' + i} icon={faStar} className="text-yellow-400 text-sm md:text-base" />
            ))}
          </div>
          {/* Navegação do carrossel */}
          <div 
            data-aos="fade-right"
            data-aos-delay="600"
            className="flex gap-2 mt-2"
          >
            <button onClick={prev} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 text-[#173F88] font-bold flex items-center justify-center hover:bg-blue-200 text-sm md:text-base">&#8592;</button>
            <button onClick={next} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-100 text-[#173F88] font-bold flex items-center justify-center hover:bg-blue-200 text-sm md:text-base">&#8594;</button>
          </div>
        </div>
        {/* Médicos à direita + bloco Google */}
        <div 
          data-aos="fade-left"
          data-aos-delay="700"
          className="flex-1 flex flex-col items-center justify-center relative"
        >
          <img src={doctorsImg} alt="Foto dos médicos da equipe MedVitta" className="w-full object-contain" loading="lazy" width={420} height={300} />
        {/* Selo Google */}
        <div
            className="bg-white rounded-xl shadow-lg flex items-center gap-2 px-4 py-2 border border-gray-100 absolute top-1/2 right-0 z-20"
          >
            <img src={googleG} alt="Logo do Google" className="h-7 w-7" loading="lazy" width={28} height={28} />
            <div className="flex flex-col text-xs">
              <span className="font-bold text-gray-800 flex items-center gap-1"><span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> <span className="text-yellow-400">★</span> (5)</span>
              <span className="text-gray-500">700+ ratings on google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
