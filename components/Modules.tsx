
import React from 'react';
import { BookOpen, ShoppingCart } from 'lucide-react';

export const Modules = () => {
  const modules = [
    { title: "Módulo 1: Introdução", desc: "A ciência por trás da dieta e por que ela funciona." },
    { title: "Módulo 2: O Que Comer", desc: "Lista completa de alimentos permitidos e proibidos (sem confusão)." },
    { title: "Módulo 3: Fase de Adaptacão", desc: "Como superar a 'gripe keto' e transicionar sem sofrimento." },
    { title: "Módulo 4: Economia", desc: "Como fazer a dieta gastando pouco no açougue." },
    { title: "Bônus: Receitas", desc: "Preparações deliciosas para variar o cardápio." },
    { title: "Bônus: Jejum Intermitente", desc: "Como potencializar seus resultados em 10x." },
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          O que você vai receber no <span className="text-carnivore-500">Guia Completo</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((mod, idx) => (
            <div key={idx} className="p-6 bg-dark-900 rounded-xl border border-dark-700 hover:border-carnivore-500 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-dark-800 rounded-lg group-hover:bg-carnivore-500 group-hover:text-dark-900 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-carnivore-500 group-hover:text-dark-900" />
                </div>
                <h3 className="font-bold text-lg text-white">{mod.title}</h3>
              </div>
              <p className="text-gray-400">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing/Checkout Anchor */}
        <div id="checkout" className="max-w-2xl mx-auto bg-gradient-to-b from-dark-700 to-dark-900 p-8 rounded-2xl border border-carnivore-500/30 text-center shadow-2xl relative overflow-hidden">
          {/* Metallic Gold Shine Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-carnivore-700 via-carnivore-200 to-carnivore-700"></div>
          
          <p className="text-carnivore-400 uppercase tracking-widest text-sm mb-2 font-semibold">Oferta por Tempo Limitado</p>
          <div className="flex justify-center items-end gap-3 mb-6">
            <span className="text-gray-500 text-xl line-through decoration-carnivore-700/50">R$ 97,00</span>
            <span className="text-5xl font-display font-extrabold text-white text-glow">R$ 47,00</span>
          </div>
          
          <button 
            onClick={() => window.open("https://pay.hotmart.com/W103017615F", "_blank")}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold text-2xl py-6 px-8 rounded-xl shadow-lg shadow-green-900/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 animate-pulse"
          >
            <ShoppingCart />
            COMPRAR AGORA
          </button>
          
          <p className="mt-4 text-xs text-gray-500 flex justify-center gap-4">
            <span>🔒 Pagamento Seguro</span>
            <span>📅 7 Dias de Garantia</span>
            <span>⚡ Acesso Imediato</span>
          </p>
        </div>
      </div>
    </section>
  );
};
