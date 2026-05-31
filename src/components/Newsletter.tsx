import { motion } from "motion/react";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop" 
          alt="Cityscape at night" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ativa-dark/95 via-ativa-dark/70 to-transparent"></div>
        <div className="absolute inset-0 bg-ativa-dark/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
        <div></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-none"
        >
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Soluções para todos</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            Inscreva-se na nossa newsletter e receba as últimas novidades
          </h2>

          <form className="flex flex-col gap-4">
             <div className="relative">
               <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
               <input 
                 type="email" 
                 placeholder="Seu E-mail"
                 className="w-full bg-white/5 border border-white/10 rounded-none py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-ativa-gold transition-colors"
               />
             </div>
             <button className="bg-ativa-gold hover:bg-ativa-gold/90 text-ativa-dark font-bold text-[10px] uppercase tracking-widest py-4 rounded-none transition-all hover:shadow-[0_0_20px_rgba(191,169,128,0.3)] w-max px-8">
               Inscrever-se
             </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
