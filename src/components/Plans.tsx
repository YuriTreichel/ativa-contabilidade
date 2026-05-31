import { motion } from "motion/react";

export function Plans() {
  const plans = [
    { title: "Construção Civil & Regularização", desc: "CNO, DISO, SERO e obtenção de CND de INSS para obras civis.", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" },
    { title: "Prestadores de Serviços", desc: "Abertura de CNPJ grátis, emissão de notas fiscais e folha de pagamento.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
    { title: "Planejamento Tributário", desc: "Redução legal de impostos para Simples, Lucro Presumido ou Real.", img: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-ativa-gold"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Soluções</span>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-ativa-dark leading-tight mb-16 max-w-2xl text-left"
        >
          Especialidades contábeis desenhadas para o seu segmento
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-none overflow-hidden group cursor-pointer border border-ativa-gold/20"
            >
              <img src={plan.img} alt={plan.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ativa-dark/90 via-ativa-dark/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                 <h3 className="text-white font-serif text-2xl mb-2">{plan.title}</h3>
                 <p className="text-white/40 text-[11px] uppercase tracking-widest">{plan.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
