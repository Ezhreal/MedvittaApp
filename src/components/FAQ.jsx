import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqs = [
  {
    q: "How are telemedicine consultations conducted?",
    a: "Consultations are scheduled at a specific time and conducted via video call, telephone call, or chat through WhatsApp. You can choose the option that best suits your needs. During the consultation, the doctor will prescribe medications, order tests, provide certificates, and make referrals according to your requirements.",
  },
  {
    q: "Are digital prescriptions legally valid?",
    a: "Yes! Our prescriptions are digitally signed and contain all required elements by medical authorities. The Digital Signature Law ensures that digitally signed documents have the same legal value as those traditionally signed by hand. These prescriptions are accepted at pharmacies across Brazil.",
  },
  {
    q: "Is the service secure and confidential?",
    a: "Yes! We are an established clinic that provides robust protection for your data in compliance with privacy regulations. We work with reputable professionals and maintain strict confidentiality protocols. Our platform uses end-to-end encryption for all communications and document transfers.",
  },
  {
    q: "How can I verify the authenticity of my documents?",
    a: "At the bottom of each prescription or certificate, you'll find a QR code, a token code, and an access code. To validate the signature and verify its legitimacy, visit the verification website indicated on your document and follow the simple verification process.",
  },
  {
    q: "Are certificates valid for employers?",
    a: "Yes! Our medical certificates are officially valid documents. They contain all required elements with a digital signature that can be validated through an official verification system. These certificates are suitable for submission to employers, schools, government agencies, and other institutions.",
  },
  {
    q: "Can I discuss my specific needs?",
    a: "Absolutely! During your consultation, you'll undergo a comprehensive assessment where the doctor will evaluate your health status. You can freely discuss your specific needs, concerns, and preferences. Our physicians are committed to providing personalized care and will work with you to develop appropriate treatment plans and documentation.",
  },
];

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+34605490427";
    const message = "I have more questions about the service, please..";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const [open, setOpen] = useState(null);
  return (
    <section className="w-full py-10 md:py-16 px-4 bg-[#173F88] flex flex-col items-center">
      <div className="w-full max-w-[1330px] flex flex-col items-center">
        <h2 
          data-aos="fade-up" 
          data-aos-delay="50"
          className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 text-center"
        >
          Frequently Asked <span className="text-[#F1E762]">Questions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-6 md:mb-10">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={100 + (i * 50)}
              className="relative flex flex-col"
            >
              <button
                className="w-full flex items-center justify-between bg-[#1d388a]/80 rounded-2xl px-4 md:px-8 py-4 md:py-5 text-left text-white font-semibold focus:outline-none transition shadow-md hover:bg-[#1d388a]"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <span className="ml-4 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#F1E762]">
                  <FontAwesomeIcon icon={faArrowRight} className="text-[#F1E762] text-sm md:text-lg" />
                </span>
              </button>
              {open === i && (
                <div 
                  data-aos="fade-up"
                  className="bg-[#1d388a]/90 text-blue-100 text-xs md:text-sm px-4 md:px-8 py-3 md:py-4 rounded-b-2xl border-t border-blue-800 animate-fade-in"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          onClick={handleWhatsAppClick}
          className="bg-[#F1E762] text-[#173F88] font-medium flex items-center cursor-pointer px-4 py-6 rounded-full hover:bg-yellow-400 transition text-base mt-4 md:mt-8 min-w-[280px] md:min-w-[300px] h-[48px]"
        >
          <span className="flex-1 text-left">Have more questions?</span>
          <span className="flex items-center justify-center ml-4 w-8 h-8 rounded-full border-2 border-[#2346a0]">
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2346a0] text-lg" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default FAQ;
