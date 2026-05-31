import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FocusValue() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      alt: "Sala de reunião moderna"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      alt: "Trabalho no notebook"
    },
    {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
      alt: "Escritório corporativo moderno"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-ativa-gold"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Foco em Resultados</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-ativa-dark leading-tight">
              Nosso foco é entregar valor superior aos nossos clientes em consultoria empresarial
            </h2>
            
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Trabalhamos lado a lado com a sua empresa para diagnosticar gargalos, otimizar processos internos, reduzir a carga tributária de forma legal e impulsionar a lucratividade do seu negócio.
            </p>
            
            <div className="pt-2">
              <a 
                href="#sobre" 
                className="inline-flex items-center gap-3 text-xs font-bold text-ativa-dark uppercase tracking-widest group hover:text-ativa-gold transition-colors"
              >
                Conheça Nossa Filosofia
                <ArrowRight className="w-4 h-4 text-ativa-dark group-hover:text-ativa-gold group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Three Image Columns */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`overflow-hidden rounded-3xl border border-gray-100 ${
                  idx === 1 ? 'translate-y-6' : ''
                }`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
