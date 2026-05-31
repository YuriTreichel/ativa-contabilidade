import { motion } from "motion/react";
import { Check } from "lucide-react";

export function MarketingHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" 
          alt="Marketing Team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ativa-dark/90 to-ativa-dark/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div></div> {/* Empty column to push content to the right as per image */}
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-widest text-xs text-white font-semibold">Soluções Corporativas</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-12 leading-tight">
            Gestão Contábil Completa & Segura
          </h2>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative">
             <div className="flex-1">
                <span className="text-white/60 text-sm font-medium tracking-wider mb-2 block">PLANEJAMENTO ANUAL</span>
                <h3 className="font-serif text-4xl text-white mb-4">Economia Real</h3>
                <p className="text-white/70 text-sm">Estruturamos o planejamento fiscal da sua empresa para identificar créditos acumulados e reduzir legalmente sua carga tributária.</p>
             </div>
             
             
          </div>
        </motion.div>
      </div>
    </section>
  );
}
