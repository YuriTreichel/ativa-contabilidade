import { motion } from "motion/react";
import { ShieldCheck, BarChart3, TrendingUp, Laptop, ArrowRight } from "lucide-react";
import { useState } from "react";

export function PricingTable() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Blindagem e Compliance Fiscal",
      tag: "SEGURANÇA",
      description: "Prevenção ativa de riscos através de auditorias digitais constantes e cruzamento de dados fiscais com a Receita Federal, evitando multas e notificações.",
      details: [
        "Auditoria digital preventiva de obrigações acessórias",
        "Monitoramento contínuo de certidões negativas (CND)",
        "Suporte completo diante de fiscalizações",
        "Adequação rigorosa à LGPD fiscal"
      ]
    },
    {
      icon: TrendingUp,
      title: "Planejamento Tributário Estratégico",
      tag: "ECONOMIA",
      description: "Análise contínua e minuciosa do enquadramento tributário para identificar oportunidades legais de redução de impostos no Simples Nacional, Lucro Presumido e Lucro Real.",
      details: [
        "Simulação comparativa anual de regimes fiscais",
        "Recuperação de créditos tributários sobre insumos/produtos",
        "Redução legal de carga de PIS/COFINS e ICMS",
        "Estudo de incentivos fiscais setoriais"
      ]
    },
    {
      icon: BarChart3,
      title: "Contabilidade Gerencial e Dashboards",
      tag: "DECISÃO",
      description: "Tradução de dados contábeis complexos em relatórios gerenciais claros, DREs periódicos e indicadores chaves (KPIs) para guiar o crescimento da sua empresa.",
      details: [
        "Envio mensal de DRE (Demonstrativo do Resultado do Exercício)",
        "Análise de margem de lucro e pontos de equilíbrio",
        "Reuniões trimestrais de diagnóstico financeiro",
        "Orientação para captação de recursos e linhas de crédito"
      ]
    },
    {
      icon: Laptop,
      title: "BPO Financeiro e Integração Digital",
      tag: "PRODUTIVIDADE",
      description: "Terceirização e automação da gestão do seu contas a pagar, contas a receber e conciliação diária integrada diretamente ao sistema de faturamento.",
      details: [
        "Conciliação bancária automatizada diária",
        "Emissão simplificada de notas fiscais de serviço e comércio",
        "Integração contábil sem digitação manual de papel",
        "Relatórios semanais de fluxo de caixa realizado"
      ]
    }
  ];

  return (
    <section className="py-24 bg-ativa-light border-b border-gray-100 relative overflow-hidden" id="inteligencia-contabil">
      {/* Subtle background glow elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-ativa-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-ativa-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-ativa-gold"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-semibold">Inteligência Operacional</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-ativa-dark leading-tight"
            >
              Muito além da burocracia.<br />
              Sua contabilidade como aliada estratégica.
            </motion.h2>
          </div>
          
          <div className="lg:col-span-4">
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Substituímos processos manuais e passivos por um ecossistema contábil proativo, focado em reduzir custos tributários e trazer clareza para suas decisões empresariais.
            </p>
          </div>
        </div>

        {/* Tab-like / Grid Interactive Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Navigation / Selection Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 transition-all duration-300 relative border flex gap-6 items-start cursor-pointer rounded-lg ${
                    isActive 
                      ? 'bg-white border-ativa-gold/40 shadow-xl shadow-ativa-dark/5 translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200'
                  }`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-ativa-gold rounded-l-lg"></div>
                  )}

                  <div className={`p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-ativa-gold text-white' : 'bg-white text-ativa-blue border border-gray-100'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-ativa-gold uppercase block mb-1">
                      {pillar.tag}
                    </span>
                    <h3 className="font-serif text-lg text-ativa-dark font-medium leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 line-clamp-1 font-light">
                      {pillar.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display Column */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-ativa-dark/5 flex flex-col justify-between min-h-[450px] rounded-lg">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-grow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-ativa-gold/15 text-ativa-gold text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {pillars[activeTab].tag}
                </span>
                <span className="text-gray-300 text-xs">|</span>
                <span className="text-gray-400 text-[10px] tracking-wider uppercase font-medium">Solução Ativa</span>
              </div>

              <h3 className="font-serif text-3xl text-ativa-dark mb-6 leading-tight">
                {pillars[activeTab].title}
              </h3>

              <p className="text-gray-600 text-sm font-light leading-relaxed mb-8">
                {pillars[activeTab].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {pillars[activeTab].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ativa-gold mt-1.5 shrink-0"></div>
                    <span className="text-xs text-gray-700 font-light">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Tem interesse nesta especialidade?</p>
                <p className="text-xs text-gray-700 mt-1 font-light">Solicite um diagnóstico gratuito das necessidades da sua empresa.</p>
              </div>
              <a 
                href="#contato" 
                className="bg-ativa-dark hover:bg-ativa-gold text-white text-xs font-bold uppercase tracking-widest px-6 py-4 transition-all duration-300 flex items-center gap-2 group whitespace-nowrap rounded-lg"
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
