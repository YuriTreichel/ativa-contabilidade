import * as React from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  Receipt, 
  Users, 
  BookOpen, 
  Coins, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  MessageSquare
} from "lucide-react";

interface ServiceItem {
  title: string;
  url?: string;
}

interface ServiceCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  services: ServiceItem[];
  highlight?: boolean;
}

export function ServicosPage() {
  const categories: ServiceCategory[] = [
    {
      title: "Societário",
      icon: Building2,
      description: "Apoio completo para a constituição, regularização e estruturação societária da sua empresa.",
      services: [
        { title: "Abertura de Empresas & CNPJ", url: "https://ativacontabilidadebg.com.br/abertura-de-empresas" },
        { title: "Parcelamento de Impostos", url: "https://ativacontabilidadebg.com.br/parcelamento-de-impostos" }
      ]
    },
    {
      title: "Fiscal",
      icon: Receipt,
      highlight: true,
      description: "Planejamento e gestão tributária para reduzir custos e garantir total conformidade legal.",
      services: [
        { title: "Regularização de INSS de Obras", url: "https://ativacontabilidadebg.com.br/regularizacao-de-obras-inss" },
        { title: "Abertura de CNO (Cadastro Nacional de Obras)", url: "https://ativacontabilidadebg.com.br/abertura-de-cno" },
        { title: "Revisão Tributária Estratégica", url: "https://ativacontabilidadebg.com.br/revisao-tributaria" },
        { title: "Planejamento Tributário Personalizado", url: "https://ativacontabilidadebg.com.br/planejamento-tributario" },
        { title: "Carnê Leão para Autônomos", url: "https://ativacontabilidadebg.com.br/carne-leao" },
        { title: "Emissão e Controle de Notas Fiscais", url: "https://ativacontabilidadebg.com.br/emissao-de-notas-fiscais" },
        { title: "Apuração Mensal de Impostos", url: "https://ativacontabilidadebg.com.br/apuracao-de-impostos" },
        { title: "Entrega de Obrigações Acessórias", url: "https://ativacontabilidadebg.com.br/obrigacoes-acessorias" },
        { title: "Declaração de Imposto de Renda (IRPF)", url: "https://ativacontabilidadebg.com.br/imposto-de-renda" }
      ]
    },
    {
      title: "Departamento Pessoal",
      icon: Users,
      description: "Gestão completa da folha de pagamento e obrigações trabalhistas com segurança jurídica.",
      services: [
        { title: "Admissões e Demissões de Funcionários", url: "https://ativacontabilidadebg.com.br/admissoes-e-demissoes-de-funcionarios" },
        { title: "Processamento da Folha de Pagamento", url: "https://ativacontabilidadebg.com.br/folha-de-pagamento" },
        { title: "Gestão de Guias e Contribuições INSS", url: "https://ativacontabilidadebg.com.br/guias-inss" },
        { title: "Contratos Intermitentes e Produtor Rural", url: "https://ativacontabilidadebg.com.br/contratos-intermitentes-produtor-rural" }
      ]
    },
    {
      title: "Contabilidade",
      icon: BookOpen,
      highlight: true,
      description: "Demonstrações financeiras precisas para apoiar as tomadas de decisões da sua empresa.",
      services: [
        { title: "Escrituração Contábil, Balanços & Balancetes", url: "https://ativacontabilidadebg.com.br/escrituracao-contabil-balancos-e-balancetes" },
        { title: "Relatórios Gerenciais e de Desempenho", url: "https://ativacontabilidadebg.com.br/relatorios-gerenciais" }
      ]
    },
    {
      title: "Outros Serviços",
      icon: Coins,
      description: "Consultoria e acompanhamento financeiro especializado para o crescimento do seu negócio.",
      services: [
        { title: "Acompanhamento Especializado de MEIs", url: "https://ativacontabilidadebg.com.br/acompanhamento-de-meis" },
        { title: "Consultoria Financeira Corporativa", url: "https://ativacontabilidadebg.com.br/consultoria-financeira" },
        { title: "Prestação de Contas e Análise de Projetos", url: "https://ativacontabilidadebg.com.br/prestacao-de-contas-projetos" }
      ]
    }
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Segurança e Conformidade",
      description: "Processos alinhados com as diretrizes e legislações vigentes nacionais."
    },
    {
      icon: Zap,
      title: "Agilidade e Tecnologia",
      description: "Integração digital de documentos para uma contabilidade rápida e sem papel."
    },
    {
      icon: TrendingUp,
      title: "Foco no Resultado",
      description: "Estratégias tributárias sob medida para otimizar os lucros do seu negócio."
    }
  ];

  return (
    <div className="bg-ativa-light min-h-screen pt-36 pb-24 relative overflow-hidden">
      {/* Background soft shapes for premium atmosphere */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-ativa-blue/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-ativa-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[800px] left-[-10%] w-[500px] h-[500px] rounded-full bg-ativa-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-bold">
              Soluções Inteligentes
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ativa-dark leading-tight">
                Serviços <span className="font-normal italic text-ativa-gold">Especializados</span> <br />
                para a sua Empresa.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-gray-600 leading-relaxed font-light text-base border-l-2 border-ativa-gold/30 pl-6">
                Oferecemos soluções contábeis, fiscais e societárias sob medida, com foco de excelência nos segmentos de construção civil e prestadores de serviços.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl flex gap-4 items-start shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ativa-gold/10 text-ativa-gold flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-ativa-dark text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl group border ${
                  category.highlight 
                    ? "border-ativa-gold/30 shadow-md shadow-ativa-gold/5" 
                    : "border-gray-100"
                }`}
              >
                {/* Decorative background accent on highlight */}
                {category.highlight && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-ativa-gold/10 to-transparent rounded-bl-full pointer-events-none" />
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-350 ${
                      category.highlight 
                        ? "bg-ativa-gold text-white shadow-lg shadow-ativa-gold/20 group-hover:scale-110" 
                        : "bg-ativa-blue/5 text-ativa-blue group-hover:bg-ativa-blue group-hover:text-white group-hover:scale-110"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      {category.highlight && (
                        <span className="text-[9px] uppercase tracking-widest text-ativa-gold font-bold block mb-0.5">
                          Destaque
                        </span>
                      )}
                      <h3 className="font-serif text-xl font-bold text-ativa-dark">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* List of Services */}
                  <div className="h-[1px] w-full bg-gray-100 mb-6" />
                  
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {category.services.map((service, sIdx) => (
                      <li key={sIdx} className="group/item">
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-3 text-xs text-gray-600 hover:text-ativa-gold transition-colors font-medium leading-relaxed"
                        >
                          <span>{service.title}</span>
                          <span className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center shrink-0 opacity-0 group-hover/item:opacity-100 group-hover/item:bg-ativa-gold/10 transition-all duration-200">
                            <ArrowRight className="w-3 h-3 text-ativa-gold transition-transform group-hover/item:translate-x-0.5" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-ativa-blue rounded-[32px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl text-white"
        >
          {/* Background glowing effects */}
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-ativa-gold/10 blur-[100px] pointer-events-none" />
          <div className="absolute left-[-10%] top-[-10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col gap-6">
            <span className="text-ativa-gold uppercase tracking-[0.2em] text-[11px] font-bold">
              Fale Conosco
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Precisa de ajuda para estruturar <br />
              ou otimizar seu negócio?
            </h2>
            <p className="text-gray-300 font-light text-sm md:text-base max-w-xl leading-relaxed">
              Agende uma consulta gratuita com um de nossos especialistas contábeis e descubra como podemos acelerar seu crescimento com total segurança tributária e financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5554993442222"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ativa-gold hover:bg-ativa-gold/90 text-white font-medium text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-ativa-gold/20 hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                Falar no WhatsApp
              </a>
              <a
                href="#contato"
                className="border border-white/20 hover:bg-white/10 text-white font-medium text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-[1.02]"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
