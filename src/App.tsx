/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FocusValue } from "./components/FocusValue";
import { MarketingHero } from "./components/MarketingHero";
import { Testimonials } from "./components/Testimonials";
import { ProgressSection } from "./components/ProgressSection";
import { ProcessStats } from "./components/ProcessStats";
import { Plans } from "./components/Plans";
import { PricingTable } from "./components/PricingTable";
import { Newsletter } from "./components/Newsletter";
import { About } from "./components/About";
import { ServicosPage } from "./components/ServicosPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentHash, setCurrentHash] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      // Default to #home if hash is empty or not matching known hashes
      const hash = window.location.hash;
      if (["#home", "#sobre", "#servicos", "#contato"].includes(hash)) {
        setCurrentHash(hash);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (!hash) {
        setCurrentHash("#home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-white selection:bg-ativa-gold selection:text-white font-sans relative overflow-x-hidden">
      <TopBar />
      <NavBar />
      
      <div className="transition-all duration-350">
        {currentHash === "#home" && (
          <>
            <Hero />
            <Features />
            <FocusValue />
            <MarketingHero />
            <Testimonials />
            <ProgressSection />
            <ProcessStats />
            <Plans />
            <PricingTable />
            <Newsletter />
          </>
        )}
        {currentHash === "#sobre" && <About />}
        {currentHash === "#servicos" && <ServicosPage />}
        {currentHash === "#contato" && <Contact />}
      </div>

      <Footer />
    </main>
  );
}
