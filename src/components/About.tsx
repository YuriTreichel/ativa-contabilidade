import { motion } from "motion/react";
import { Award, Eye, Heart, Target } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Marciane Tonello",
      role: "Contadora",
      image: "https://yata-apix-af6a6281-7b56-49fd-977b-346de28767b1.s3-object.locaweb.com.br/4ae4d9fcf1e3402d87ef916627fa224a.png",
      bio: "Graduada pela faculdade Cenecista de Bento Gonçalves, pós-graduada em Direito tributário pelo Instituto de Pós-graduação e Graduação - IPOG de Porto Alegre. Desde 2012 atua na contabilidade, em específico na gestão e planejamento tributário das empresas, com enfoque na ampla experiência da tributação do regime Lucro Real."
    },
    {
      name: "Laís Molon Lucietto",
      role: "Contadora",
      image: "https://yata-apix-af6a6281-7b56-49fd-977b-346de28767b1.s3-object.locaweb.com.br/2649cb9de8cd4fcb9fbab088fa3b0279.jpg",
      bio: "Formada pela Universidade de Caxias do Sul, pós-graduada em Gestão Financeira e Auditoria, Controladoria e Perícia Contábil. Atua desde 2005 na contabilidade, atendendo clientes das mais variadas áreas."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções contábeis e tributárias inteligentes que gerem real economia, promovendo a segurança jurídica e o crescimento sustentável de cada cliente."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência regional em contabilidade de resultado e planejamento estratégico, reconhecida pela excelência, transparência e proximidade com o cliente."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Ética inabalável, dedicação integral à conformidade legal, atendimento altamente personalizado e compromisso com o sucesso financeiro dos nossos parceiros."
    }
  ];

  return (
    <div className="bg-ativa-light min-h-screen pt-36 pb-24 relative overflow-hidden">
      {/* Background shapes for premium layout */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-ativa-blue/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] rounded-full bg-ativa-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-ativa-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header/Belief */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-bold">Quem Somos</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3.5xl md:text-5xl lg:text-6xl text-ativa-dark leading-tight"
          >
            Nós acreditamos que o <span className="text-ativa-gold font-normal italic">sucesso</span> está ao alcance de todas as empresas que adotarem boas práticas de gestão.
          </motion.h1>
          <p className="text-gray-600 mt-6 leading-relaxed font-light text-base max-w-2xl border-l-2 border-ativa-gold/30 pl-6">
            Isso inclui ter uma contabilidade parceira que desburocratize processos, atue de forma estratégica na sua economia tributária e esteja preparada para orientar sua tomada de decisão de maneira 100% personalizada.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-28">
          {team.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col gap-6 bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-350 group"
            >
              {/* Partner Portrait Frame */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-ativa-light border border-gray-100">
                <img 
                  src={partner.image} 
                  alt={`Contadora ${partner.name}`}
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-550 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ativa-blue/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Partner Details */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between border-b border-gray-100 pb-3">
                  <h3 className="font-serif text-2xl text-ativa-dark font-bold">
                    {partner.name}
                  </h3>
                  <span className="text-ativa-gold uppercase tracking-wider text-xs font-semibold shrink-0">
                    {partner.role}
                  </span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed font-light">
                  {partner.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Values / Corporate Pillars */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-bold">Nossos Pilares</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-ativa-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-ativa-blue/5 text-ativa-blue flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ativa-dark mb-3">
                      {val.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
