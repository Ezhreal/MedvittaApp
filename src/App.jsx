import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import ConsultationReasons from "./components/ConsultationReasons";
import ConditionsTreated from "./components/ConditionsTreated";
import Benefits from "./components/Benefits";
import About from "./components/About";
import DoctorProfile from "./components/DoctorProfile";
import NurseProfile from "./components/NurseProfile";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css"; // Make sure Tailwind is imported
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Hero />
      <Features />
      <HowItWorks />
      <Services />
      <ConsultationReasons />
      <ConditionsTreated />
      <Benefits />
      <About />
      <DoctorProfile />
      <NurseProfile />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
