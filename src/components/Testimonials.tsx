import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        <div className="md:col-span-4 flex flex-col items-start gap-8">
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-ativa-gold hover:border-ativa-gold transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-ativa-gold hover:border-ativa-gold transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
            alt="Erika Dilmav" 
            className="w-32 h-32 rounded-none object-cover border border-ativa-gold/30 shadow-2xl"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-8"
        >
          <h3 className="font-serif text-3xl text-ativa-dark mb-8">O que eles dizem</h3>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light italic">
            "Tempor orci dapibus ultrices in iaculis. Etiam sit amet nisl purus in. Risus commodo maecenas accumsan lacus vel facilisis. Velit scelerisque in dictum non consectetur a erat nam. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Donec adipiscing tristique risus nec feugiat. Elit pellentesque habitant morbi tristique senectus et netus et. Suscipit tellus mauris a diam maecenas."
          </p>
          <div>
            <h4 className="font-serif text-xl tracking-wide text-ativa-dark">Erika Dilmav</h4>
            <span className="text-[10px] text-ativa-gold tracking-[0.2em] uppercase">Manager</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
