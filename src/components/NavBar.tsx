import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const links = [
    { name: "Home", hash: "#home" },
    { name: "Sobre", hash: "#sobre" },
    { name: "Serviços", hash: "#servicos" },
    { name: "Contato", hash: "#contato" }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isHome = activeHash === "#home";

  return (
    <nav className="absolute top-10 left-0 w-full z-40 px-6 py-4">
      <div className={`max-w-7xl mx-auto bg-transparent border-b px-8 py-4 flex items-center justify-between ${
        isHome ? "border-white/10" : "border-ativa-dark/10"
      }`}>
        <a href="#home" className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="Ativa Contabilidade" 
            className="h-12 md:h-[80px] w-auto object-contain"
          />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em]">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.hash} 
              className={`transition-colors hover:text-ativa-gold ${
                activeHash === link.hash 
                  ? "text-ativa-gold font-bold" 
                  : isHome ? "text-white/70" : "text-ativa-dark/80"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a 
            href="#contato"
            className={`font-bold text-xs uppercase tracking-widest py-2.5 px-6 transition-all border ${
              isHome 
                ? "bg-ativa-gold hover:bg-transparent border-ativa-gold text-ativa-dark hover:text-ativa-gold hover:shadow-[0_0_15px_rgba(191,169,128,0.4)]" 
                : "bg-ativa-dark hover:bg-transparent border-ativa-dark text-white hover:text-ativa-dark"
            }`}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={`md:hidden ${isHome ? "text-white" : "text-ativa-dark"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 bg-ativa-dark text-white p-6 rounded-2xl flex flex-col gap-4 border border-white/10 shadow-2xl"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.hash} 
                onClick={() => setIsOpen(false)} 
                className={`transition-colors text-lg font-medium border-b border-white/10 pb-2 hover:text-ativa-gold ${
                  activeHash === link.hash ? "text-ativa-gold font-bold" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-ativa-gold hover:bg-ativa-gold/90 text-ativa-dark font-bold text-xs uppercase tracking-widest py-3 px-6 transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
