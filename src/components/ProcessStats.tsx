import { motion } from "motion/react";
import { BookOpen, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

export function ProcessStats() {
  const steps = [
    { icon: <BookOpen className="w-6 h-6" />, title: "1. Diagnóstico Inicial", desc: "Análise detalhada da situação fiscal, trabalhista e tributária atual da sua empresa." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "2. Planejamento Tributário", desc: "Definição do enquadramento ideal para otimizar e reduzir impostos de forma legal." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "3. Organização & Integração", desc: "Configuração de emissões de notas e rotinas mensais integradas e descomplicadas." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "4. Suporte Consultivo", desc: "Análise periódica de relatórios contábeis e fiscais para apoiar suas decisões de negócios." },
  ];

  const stats = [
    { num: "01", max: "100%", label: "SEGURANÇA FISCAL" },
    { num: "02", max: "18+", label: "ANOS DE EXPERIÊNCIA" },
    { num: "03", max: "250+", label: "CLIENTES ATENDIDOS" },
  ];

  return (
    <section className="py-0 grid grid-cols-1 lg:grid-cols-2">
      <div className="relative min-h-[600px] flex items-center justify-center py-20 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ativa-dark/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-md flex flex-col gap-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ativa-gold shrink-0 mt-1">
                {step.icon}
              </div>
              <div>
                <h4 className="text-white font-bold leading-none mb-3">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-white border-l border-gray-100 flex items-center py-20 px-6 lg:px-20 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-ativa-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
         
         <div className="w-full max-w-xl">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-ativa-gold"></div>
               <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Parceria Estratégica</span>
            </div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="font-serif text-4xl md:text-5xl text-ativa-dark leading-tight mb-20"
            >
               Contabilidade consultiva que impulsiona o crescimento do seu negócio.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="pt-6 sm:pt-0 sm:pl-8 first:pl-0 flex flex-col">
                   <span className="text-sm font-light text-gray-400 mb-6">{stat.num}</span>
                   <motion.span 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: 0.5 + (idx * 0.2) }}
                     className="font-serif text-5xl text-ativa-dark mb-4"
                   >
                     {stat.max}
                   </motion.span>
                   <span className="text-[10px] tracking-[0.2em] text-gray-500 font-bold uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
}
