import { motion } from "motion/react";
import { 
  Building2, 
  Receipt, 
  Calculator, 
  Users, 
  Hammer, 
  TrendingUp, 
  SearchCheck 
} from "lucide-react";

export function Features() {
  const features = [
    { 
      icon: <Building2 className="w-8 h-8" />, 
      title: "Societário", 
      desc: "Constituição, alteração e encerramento de empresas, fusões e regularização societária completa." 
    },
    { 
      icon: <Receipt className="w-8 h-8" />, 
      title: "Fiscal", 
      desc: "Escrituração e apuração de tributos, cumprimento de obrigações acessórias e assessoria fiscal." 
    },
    { 
      icon: <Calculator className="w-8 h-8" />, 
      title: "Contábil", 
      desc: "Elaboração de demonstrações contábeis, balanços, balancetes e controle patrimonial." 
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Departamento Pessoal", 
      desc: "Processamento de folha de pagamento, admissões, rescisões e gestão de obrigações trabalhistas." 
    },
    { 
      icon: <Hammer className="w-8 h-8" />, 
      title: "Regularização de Obras", 
      desc: "Regularização e emissão de CNO e DISO para obras civis e obtenção de CND de INSS." 
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: "Planejamento Tributário", 
      desc: "Estudo e definição do melhor regime fiscal para redução de impostos legalmente." 
    },
    { 
      icon: <SearchCheck className="w-8 h-8" />, 
      title: "Revisão Tributária", 
      desc: "Auditoria e identificação de créditos tributários pagos a maior ou indevidamente." 
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Como Ajudamos</span>
            <div className="h-[1px] w-8 bg-ativa-gold"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-ativa-dark">Conheça Nossas Especialidades</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300 border border-gray-100/50"
            >
              <div className="w-16 h-16 rounded-full bg-ativa-light border border-gray-200 text-ativa-gold flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg tracking-wide text-ativa-dark font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
