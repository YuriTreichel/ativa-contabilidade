import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ProgressSection() {
  const bars = [
    { label: "Planejamento Tributário", percentage: 92 },
    { label: "Regularização de Obras & INSS", percentage: 88 },
    { label: "Escrituração & Obrigações Fiscais", percentage: 95 },
  ];

  const cards = [
    { tag: "TRIBUTÁRIO", category: "PLANEJAMENTO", title: "Como reduzir a carga de impostos legalmente no Lucro Presumido", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
    { tag: "OBRAS", category: "REGULARIZAÇÃO", title: "Regularização de Obras Civis: Como obter a CND do INSS com segurança", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
    { tag: "GESTÃO", category: "FINANÇAS", title: "Principais erros no fluxo de caixa que prejudicam a saúde da sua empresa", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop" },
    { tag: "SOCIETÁRIO", category: "ABERTURA", title: "Passo a passo para abrir sua empresa e escolher o CNAE correto", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-ativa-dark leading-tight mb-8"
            >
              Confie no processo & impulsione o seu negócio
            </motion.h2>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-ativa-gold"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Soluções para todos</span>
            </div>
          </div>
          
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="rounded-2xl overflow-hidden mb-6 aspect-w-16 aspect-h-12 relative w-full pt-[75%]">
                 <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex gap-4 text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-3 uppercase">
                <span className="text-ativa-gold">{card.tag}</span>
                <span>{card.category}</span>
              </div>
              <h3 className="font-serif text-xl text-ativa-dark mb-4 leading-snug group-hover:text-ativa-gold transition-colors">{card.title}</h3>
              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-ativa-dark uppercase tracking-widest">
                Ler Mais <ArrowRight className="w-4 h-4 text-ativa-dark group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
