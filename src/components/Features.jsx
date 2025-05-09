import React, { useEffect } from "react";
import featureMedical from "../assets/feature-medical.webp";
import whatsappCall from "../assets/whatsapp-call.webp";
import dnaBG from '../assets/dna-bg.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: "Medical Consultations",
    desc: "Online medical consultation with a general practitioner or specialist. More than 35 specialties available.",
    icon: featureMedical,
    whatsappMessage: "Hello, I would like to discuss Medical Consultations.",
  },
  {
    title: "Medical Certificates",
    desc: "Medical certificates for illness, fitness assessments, civil service exams, and health clearances",
    icon: featureMedical,
    whatsappMessage: "Hello, I would like to discuss Medical Certificates.",
  },
  {
    title: "Prescription Renewal",
    desc: "The general practitioner can prescribe controlled medications for anxiety, weight management, cardiac conditions",
    icon: featureMedical,
    whatsappMessage: "Hello, I would like to discuss Prescription Renewal.",
  },
  {
    title: "Test Referrals",
    desc: "Request a referral for examinations available in your local area. Issue referrals only; we do not perform the examinations.",
    icon: featureMedical,
    whatsappMessage: "Hello, I would like to discuss Test Referrals.",
  },
  {
    title: "Medical Reports",
    desc: "Need a medical report for your condition or illness? Contact us to request one.",
    icon: featureMedical,
    whatsappMessage: "Hello, I would like to discuss Medical Reports.",
  },
  {
    title: "Psychological Consultation",
    desc: "Schedule an online consultation with a psychologist in an easy, secure and straightforward manner.",
    icon: featureMedical,
    whatsappMessage: "Hello, I would like to discuss Psychological Consultation.",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const handleWhatsAppClick = (message) => {
    const phoneNumber = "+34605490427";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="w-full py-10 md:py-20 px-4 bg-white flex flex-col bg-no-repeat items-center" 
    style={{ backgroundImage: `url(${dnaBG})`, backgroundPosition: 'bottom' }}>
      <div className="w-full max-w-[1330px]">
        <div 
          data-aos="fade-up" 
          data-aos-delay="50"
          className="mb-2 text-gray-400 font-semibold text-base md:text-lg"
        >
          How It Works
        </div>
        <h2 
          data-aos="fade-up" 
          data-aos-delay="100"
          className="text-2xl md:text-4xl font-bold text-[#173F88] mb-6 md:mb-10 leading-tight md:text-left"
        >
          Consultations available via video call, voice call or text chat.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={150 + (i * 50)}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 flex flex-col h-full transition hover:shadow-lg"
            >
              <img src={f.icon} alt={f.title} className="h-10 w-10 mb-3 md:mb-4" />
              <h3 className="font-bold text-base md:text-lg text-[#173F88] mb-2">{f.title}</h3>
              <p className="text-gray-700 text-sm mb-4 md:mb-6">{f.desc}</p>
              <div className="border-t border-dashed border-gray-300 mb-3 md:mb-4" />
              <div className="flex items-center justify-between mt-auto">
                <button
                  onClick={() => handleWhatsAppClick(f.whatsappMessage)}
                  className="text-[#173F88] cursor-pointer font-medium text-sm hover:underline"
                >
                  Discuss {f.title}
                </button>
                <span className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-blue-900">
                  <img src={whatsappCall} alt="WhatsApp Call" className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
