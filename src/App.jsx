import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import ConsultationReasons from "./components/ConsultationReasons";
import ConditionsTreated from "./components/ConditionsTreated";
import Benefits from "./components/Benefits";
import About from "./components/About";
import DoctorProfile from "./components/DoctorProfile";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css"; // Make sure Tailwind is imported

function App() {
  return (
    <div className="App">
      {/* You might want a Header/Navbar component here too */}
      <Hero />
      <Features />
      <HowItWorks />
      <Services />
      <ConsultationReasons />
      <ConditionsTreated />
      <Benefits />
      <About />
      <DoctorProfile />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
