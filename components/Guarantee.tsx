import React from 'react';
import { ShieldCheck, CalendarCheck } from 'lucide-react';

export const Guarantee = () => {
  return (
    <section className="py-16 bg-dark-900 border-y border-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-dark-800 to-dark-950 rounded-2xl border border-carnivore-500/30 p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Seal Icon */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute inset-0 bg-carnivore-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative w-40 h-40 flex items-center justify-center">
               {/* CSS Only Seal Shape */}
               <div className="absolute inset-0 border-4 border-dashed border-carnivore-600 rounded-full animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-2 border-2 border-carnivore-400 rounded-full"></div>
               <div className="text-center">
                 <ShieldCheck className="w-12 h-12 text-carnivore-500 mx-auto mb-1" />
                 <span className="block text-3xl font-black text-white leading-none">7</span>
                 <span className="block text-[10px] font-bold text-carnivore-400 uppercase tracking-widest">Dias de<br/>Garantia</span>
               </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Seu Risco é <span className="text-carnivore-500 underline decoration-carnivore-500/30 underline-offset-4">Absolutamente Zero</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Você tem 7 dias completos para baixar o guia, testar as receitas e aplicar o protocolo. Se por qualquer motivo você não sentir diferença na sua energia ou no seu corpo, nós devolvemos 100% do seu dinheiro.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-carnivore-400 font-semibold bg-carnivore-900/20 px-4 py-2 rounded-lg border border-carnivore-500/20">
              <CalendarCheck className="w-4 h-4" />
              <span>Proteção incondicional Hotmart</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};