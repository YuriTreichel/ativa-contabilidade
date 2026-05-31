import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ativa-dark text-white/80 pt-20 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Ativa Contabilidade BG" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-xs font-light leading-relaxed max-w-xs">
              Promovemos tranquilidade para sua empresa através de um atendimento humanizado, seguro e altamente qualificado. Qualificação e dedicação em cada número!
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-lg tracking-wide text-white font-semibold">Navegação</h4>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a href="#home" className="hover:text-ativa-gold transition-colors w-fit">Home</a>
              <a href="#sobre" className="hover:text-ativa-gold transition-colors w-fit">Sobre Nós</a>
              <a href="#servicos" className="hover:text-ativa-gold transition-colors w-fit">Serviços</a>
              <a href="#contato" className="hover:text-ativa-gold transition-colors w-fit">Contato</a>
            </div>
          </div>

          {/* Contact Details & Social */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-lg tracking-wide text-white font-semibold">Contato</h4>
            <div className="flex flex-col gap-3 text-xs text-white/50 font-light">
              <a href="https://api.whatsapp.com/send/?phone=5554993442222" target="_blank" rel="noopener noreferrer" className="hover:text-ativa-gold transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-ativa-gold" /> (54) 9 9344-2222
              </a>
              <a href="mailto:contato@ativacontabilidadebg.com.br" className="hover:text-ativa-gold transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 text-ativa-gold" /> contato@ativacontabilidadebg.com.br
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ativa-gold shrink-0 mt-0.5" />
                <span>R. São Paulo, 373 - Centro, Bento Gonçalves - RS, 95700-026</span>
              </span>
            </div>
            
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com/ativacontabilidadebg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-ativa-gold hover:border-ativa-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/ativacontabilidadebg?igsh=MTNhNzl4NGtleDRtZg==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:text-ativa-gold hover:border-ativa-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-between gap-4 md:flex-row text-center text-xs text-white/40">
           <p>&copy; {new Date().getFullYear()} Ativa Contabilidade BG. Todos os direitos reservados.</p>
           <p>Qualificação e dedicação em cada número, sempre ativa em cada solução.</p>
        </div>
      </div>
    </footer>
  );
}
