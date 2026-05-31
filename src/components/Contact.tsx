import * as React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="bg-ativa-light min-h-screen pt-36 pb-24 relative overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-ativa-blue/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-ativa-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 left-[-10%] w-[500px] h-[500px] rounded-full bg-ativa-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-ativa-gold"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] text-ativa-gold font-bold">Contato</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ativa-dark leading-tight max-w-2xl">
            Vamos <span className="font-normal italic text-ativa-gold">conversar</span> sobre seu negócio.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-gray-600 leading-relaxed text-sm font-light border-l-2 border-ativa-gold/30 pl-6 mb-4">
              Entre em contato direto com a melhor consultoria contábil de Bento Gonçalves e região da serra gaúcha. Estamos prontos para apoiar sua jornada corporativa.
            </p>

            {/* Whatsapp Card */}
            <motion.a 
              href="https://api.whatsapp.com/send/?phone=5554993442222" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-5 hover:border-ativa-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 text-[#25d366] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#25d366] block mb-1">WhatsApp</span>
                <span className="font-serif text-lg font-bold text-ativa-dark block mb-1">(54) 9 9344-2222</span>
                <p className="text-gray-400 text-[11px] font-light">Resposta rápida e atendimento direto.</p>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a 
              href="mailto:contato@ativacontabilidadebg.com.br"
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-5 hover:border-ativa-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-ativa-gold/10 text-ativa-gold flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-ativa-gold block mb-1">E-mail</span>
                <span className="font-serif text-base font-bold text-ativa-dark block mb-1 break-all">contato@ativacontabilidadebg.com.br</span>
                <p className="text-gray-400 text-[11px] font-light">Envie sua proposta ou dúvidas comerciais.</p>
              </div>
            </motion.a>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-ativa-blue/5 text-ativa-blue flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-ativa-blue block mb-1">Escritório</span>
                <span className="font-serif text-base font-bold text-ativa-dark block mb-1">R. São Paulo, 373 - Centro</span>
                <p className="text-gray-500 text-xs font-light leading-relaxed">
                  Bento Gonçalves - RS <br />
                  CEP: 95700-026
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-ativa-blue/[0.02]">
              <h3 className="font-serif text-2xl font-bold text-ativa-dark mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold pl-1">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ex: João Silva" 
                      className="w-full bg-ativa-light border border-gray-200 focus:border-ativa-gold focus:outline-hidden rounded-xl px-4 py-3.5 text-xs text-ativa-dark transition-all duration-300 font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold pl-1">E-mail de Contato</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Ex: joao@empresa.com" 
                      className="w-full bg-ativa-light border border-gray-200 focus:border-ativa-gold focus:outline-hidden rounded-xl px-4 py-3.5 text-xs text-ativa-dark transition-all duration-300 font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold pl-1">Telefone / Celular</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Ex: (54) 99999-9999" 
                      className="w-full bg-ativa-light border border-gray-200 focus:border-ativa-gold focus:outline-hidden rounded-xl px-4 py-3.5 text-xs text-ativa-dark transition-all duration-300 font-light"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold pl-1">Assunto</label>
                    <input 
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Ex: Abertura de Empresa" 
                      className="w-full bg-ativa-light border border-gray-200 focus:border-ativa-gold focus:outline-hidden rounded-xl px-4 py-3.5 text-xs text-ativa-dark transition-all duration-300 font-light"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold pl-1">Mensagem</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Fale brevemente sobre o seu negócio e as suas necessidades contábeis..." 
                    className="w-full bg-ativa-light border border-gray-200 focus:border-ativa-gold focus:outline-hidden rounded-xl px-4 py-3.5 text-xs text-ativa-dark transition-all duration-300 font-light resize-none leading-relaxed"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={submitted}
                  className={`mt-2 bg-ativa-blue hover:bg-ativa-blue/90 text-white font-medium text-xs py-4 rounded-xl transition-all duration-350 flex items-center justify-center gap-3 shadow-lg shadow-ativa-blue/10 hover:scale-[1.01] cursor-pointer ${
                    submitted ? "opacity-80 bg-emerald-600 hover:bg-emerald-600 cursor-default" : ""
                  }`}
                >
                  {submitted ? (
                    <span>Mensagem Enviada com Sucesso!</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-ativa-gold" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Map Embed */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[450px] overflow-hidden rounded-[32px] shadow-2xl relative border border-gray-100"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13936.40397619654!2d-51.5127845!3d-29.161696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c23005da5ce8d%3A0x6a5528da3554e7c9!2sAtiva%20Contabilidade%20BG!5e0!3m2!1spt-BR!2sbr!4v1713054915440!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Ativa Contabilidade BG"
          ></iframe>
        </motion.div>
        
      </div>
    </div>
  );
}
