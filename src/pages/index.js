import { useState } from "react";
import Navbar from "@/component/header/page";
import HomePage from "@/component/frontend/page";

import About from "@/component/frontend/About";
import Resume from "@/component/frontend/resume";
import Services from "@/component/frontend/services";
import PortfolioPage from "@/component/frontend/portfolio";
import ContactPage from "@/component/frontend/contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {activeSection === "home" && <HomePage />}
      {activeSection === "about" && <About />}
      {activeSection === "resume" && <Resume />}
      {activeSection === "services" && <Services />}
      {activeSection === "portfolio" && <PortfolioPage />}
      {activeSection === "contact" && <ContactPage />}
    </>
  );
}
