import React from 'react';
import { XCircle } from 'lucide-react';

export const ProblemAgitation = () => {
  return (
    <section className="py-20 bg-dark-800 border-t border-dark-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Você está cansado de <span className="text-carnivore-500">lutar contra a balança?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A verdade é que fomos enganados por décadas sobre o que é uma alimentação saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Vive com fome e ansiedade por doces.",
            "Sente inchaço abdominal constante.",
            "Sofre com efeito sanfona eterno.",
            "Tem falta de energia após as refeições.",
            "Gasta fortunas com produtos 'light' e 'fit'.",
            "Não consegue focar mentalmente."
          ].map((pain, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-dark-700/30 rounded-xl border border-white/5 hover:border-carnivore-900/50 transition-colors">
              <XCircle className="w-8 h-8 text-carnivore-600 flex-shrink-0" />
              <p className="text-lg text-gray-200 font-medium">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};