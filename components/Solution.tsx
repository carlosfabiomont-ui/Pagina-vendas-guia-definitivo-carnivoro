import React from 'react';
import { Flame, Brain, ShieldCheck } from 'lucide-react';

export const Solution = () => {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-carnivore-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-carnivore-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 group perspective-1000">
            <div className="relative transform transition-transform duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-carnivore-600 to-carnivore-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000&auto=format&fit=crop" 
                alt="Churrasco com fogo - Dieta Carnívora" 
                className="relative rounded-2xl shadow-2xl shadow-black border border-dark-700 w-full object-cover h-[500px]"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-900/60 to-transparent"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Volte às suas <span className="text-carnivore-400">Origens</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A Dieta Carnívora não é uma "dieta da moda". É a forma como os humanos evoluíram comendo por milhões de anos. Ao eliminar plantas tóxicas, açúcares e processados, você permite que seu corpo se cure sozinho.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-carnivore-500/10 flex items-center justify-center flex-shrink-0 border border-carnivore-500/20">
                  <Flame className="w-6 h-6 text-carnivore-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Queima de Gordura Automática</h3>
                  <p className="text-gray-400">Torne-se uma máquina de queimar gordura ao entrar em cetose profunda.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-carnivore-500/10 flex items-center justify-center flex-shrink-0 border border-carnivore-500/20">
                  <Brain className="w-6 h-6 text-carnivore-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Clareza Mental Extrema</h3>
                  <p className="text-gray-400">Diga adeus ao "brain fog". Tenha foco laser durante todo o dia.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-carnivore-500/10 flex items-center justify-center flex-shrink-0 border border-carnivore-500/20">
                  <ShieldCheck className="w-6 h-6 text-carnivore-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Desinflamação Total</h3>
                  <p className="text-gray-400">Reduza dores nas articulações, problemas de pele e autoimunes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};