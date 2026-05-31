import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-ativa-dark">
      {/* Background elegant overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-ativa-dark via-ativa-dark/95 to-ativa-dark"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-xs text-ativa-gold font-medium">Ativa Contabilidade</span>
          </div>
          
          <span className="bg-ativa-gold/20 text-ativa-gold text-xs px-3 py-1.5 rounded-none font-semibold w-fit tracking-wide border border-ativa-gold/30">
            QUALIFICAÇÃO E DEDICAÇÃO EM CADA NÚMERO E SEMPRE ATIVA EM CADA SOLUÇÃO!
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-light">
            Nós promovemos <br/>
            <span className="text-ativa-gold font-serif italic">tranquilidade</span> para sua empresa.
          </h1>
          
          <p className="text-white/70 max-w-lg leading-relaxed text-base font-light">
            Através de um atendimento humanizado, seguro e confiável, cuidamos de toda a inteligência fiscal, societária e contábil do seu negócio.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#contato" 
              className="bg-ativa-gold hover:bg-ativa-gold/90 text-ativa-dark font-bold text-xs uppercase tracking-widest py-4 px-8 transition-all hover:shadow-[0_0_20px_rgba(191,169,128,0.4)] flex items-center gap-3"
            >
              Fale com um Especialista
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#servicos" 
              className="border border-white/20 hover:border-ativa-gold text-white hover:text-ativa-gold font-bold text-xs uppercase tracking-widest py-4 px-8 transition-all"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 relative group"
        >
          <div className="absolute inset-0 border border-ativa-gold translate-x-3 translate-y-3 pointer-events-none transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden bg-ativa-dark border border-white/10">
            <img 
              src="https://yata-apix-af6a6281-7b56-49fd-977b-346de28767b1.s3-object.locaweb.com.br/c3e335a4de6a4649980fef38d1af45e7.jpg" 
              alt="Equipe Ativa Contabilidade Bento Gonçalves" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
