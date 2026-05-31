import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-ativa-dark text-white/50 py-2 px-6 text-[10px] tracking-widest uppercase flex flex-col sm:flex-row justify-between items-center z-50 relative border-b border-white/5">
      <div className="flex gap-6 items-center">
        <span className="hidden md:inline-block">
          R. São Paulo, 373 - Centro, Bento Gonçalves - RS
        </span>
        <a href="https://api.whatsapp.com/send/?phone=5554993442222" target="_blank" rel="noopener noreferrer" className="hover:text-ativa-gold transition-colors flex items-center gap-2">
          <Phone className="w-4 h-4" /> (54) 9 9344-2222
        </a>
        <a href="mailto:contato@ativacontabilidadebg.com.br" className="hover:text-ativa-gold transition-colors hidden sm:flex items-center gap-2">
          <Mail className="w-4 h-4" /> contato@ativacontabilidadebg.com.br
        </a>
      </div>
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <a href="https://facebook.com/ativacontabilidadebg" target="_blank" rel="noopener noreferrer" className="hover:text-ativa-gold transition-colors"><Facebook className="w-4 h-4" /></a>
        <a href="https://www.instagram.com/ativacontabilidadebg?igsh=MTNhNzl4NGtleDRtZg==" target="_blank" rel="noopener noreferrer" className="hover:text-ativa-gold transition-colors"><Instagram className="w-4 h-4" /></a>
      </div>
    </div>
  );
}
