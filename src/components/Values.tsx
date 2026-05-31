import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Values() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Contabilidade", "Gestão", "Consultoria", "Diferencial"];

  const tabContents = [
    {
      title: "Contabilidade de Excelência",
      desc: "Garantimos a total conformidade legal da sua empresa. Cuidamos da escrituração contábil, elaboração de balanços, balancetes e controle patrimonial detalhado para que você tenha total clareza da saúde financeira do seu negócio.",
      data1: 75,
      label1: "Eficiência Contábil",
      data2: 25,
      label2: "Outros Fatores"
    },
    {
      title: "Gestão Eficiente",
      desc: "Processamento seguro da folha de pagamento, admissões, rescisões e cumprimento rigoroso das obrigações trabalhistas e previdenciárias. Cuidamos das obrigações acessórias do departamento pessoal para você focar no seu core business.",
      data1: 85,
      label1: "Processamento de Folha",
      data2: 15,
      label2: "Controle Manual"
    },
    {
      title: "Consultoria Estratégica",
      desc: "Realizamos o planejamento tributário anual para enquadrar sua empresa no melhor regime fiscal, minimizando legalmente o pagamento de impostos. Também fazemos revisões fiscais para recuperar créditos tributários pagos indevidamente.",
      data1: 90,
      label1: "Redução de Impostos",
      data2: 10,
      label2: "Custo Otimizado"
    },
    {
      title: "Nosso Grande Diferencial",
      desc: "Atendimento humano e próximo com especialistas experientes no setor de construção civil, incorporação de obras civis (CNO e SERO/DISO) e prestadores de serviços. Simplificamos a complexidade tributária brasileira para o seu negócio.",
      data1: 95,
      label1: "Fidelização de Clientes",
      data2: 5,
      label2: "Área de Atuação"
    }
  ];

  const current = tabContents[activeTab];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-8 border-b border-gray-200 mb-16">
          {tabs.map((tab, idx) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(idx)}
              className={`pb-4 text-[10px] uppercase tracking-widest font-semibold transition-all relative ${
                activeTab === idx ? 'text-ativa-dark font-bold' : 'text-gray-400 hover:text-gray-800'
              }`}
            >
              {tab}
              {activeTab === idx && (
                <motion.div 
                  layoutId="activeTabBorder"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-ativa-dark"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center"
          >
            <div className="lg:pr-8">
              <h3 className="font-serif text-3xl text-ativa-dark mb-4">{current.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                {current.desc}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <motion.div 
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-48 h-48 rounded-full shrink-0"
                style={{
                  background: `conic-gradient(var(--color-ativa-orange) 0% ${current.data1}%, #f1f1f1 ${current.data1}% 100%)`
                }}
              >
                <div className="absolute inset-4 bg-white rounded-full shadow-inner border border-gray-100 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-ativa-dark">{current.data1}%</span>
                </div>
              </motion.div>
              <div className="ml-8 flex flex-col justify-center gap-4 text-xs font-light tracking-widest uppercase">
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-1 bg-ativa-orange rounded-full"></div>
                   <span className="text-gray-600 text-[10px]">{current.label1}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-1 bg-gray-200 rounded-full"></div>
                   <span className="text-gray-600 text-[10px]">{current.label2}</span>
                 </div>
              </div>
            </div>

            <div className="flex justify-center items-center hidden lg:flex">
              <motion.div 
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-48 h-48 rounded-full shrink-0"
                style={{
                  background: `conic-gradient(var(--color-ativa-blue) 0% ${current.data1}%, var(--color-ativa-orange) ${current.data1}% 100%)`
                }}
              >
                <div className="absolute inset-4 bg-white rounded-full shadow-inner border border-gray-100 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-ativa-dark">{current.data1}%</span>
                </div>
              </motion.div>
               <div className="ml-8 flex flex-col justify-center gap-4 text-xs font-light tracking-widest uppercase">
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-1 bg-ativa-blue rounded-full"></div>
                   <span className="text-gray-600 text-[10px]">{current.label1}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-1 bg-ativa-orange rounded-full"></div>
                   <span className="text-gray-600 text-[10px]">Alinhamento</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
