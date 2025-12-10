import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const SocialProof = () => {
  const testimonials = [
    {
      name: "Ricardo M.",
      role: "Perdeu 12kg em 40 dias",
      text: "Eu achava que ia enjoar de comer carne, mas foi o contrário. Minha energia triplicou e a barriga sumiu. O guia me salvou de cometer erros bobos no início.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
    },
    {
      name: "Ana Clara",
      role: "Adeus Diabetes Tipo 2",
      text: "Minha glicose normalizou em 3 semanas. O médico retirou 2 remédios. O guia explica tudo de forma muito simples, sem aquelas receitas malucas.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=150&h=150"
    },
    {
      name: "Felipe Costa",
      role: "Foco Mental e Definição",
      text: "Trabalho com TI e o 'brain fog' sumiu. Consigo focar por horas. Além disso, sequei 8kg de gordura e ganhei massa magra apenas seguindo o protocolo.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-dark-950 border-t border-dark-800 relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-carnivore-500/10 border border-carnivore-500/20 px-4 py-1 rounded-full mb-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-carnivore-500 fill-carnivore-500" />)}
            </div>
            <span className="text-xs font-bold text-carnivore-400 uppercase tracking-widest">+1.500 Alunos Satisfeitos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Resultados <span className="text-carnivore-500">Reais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja o que acontece quando você para de lutar contra sua biologia e começa a se alimentar como um humano deve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-dark-900 p-8 rounded-2xl border border-dark-700 relative hover:border-carnivore-500/50 transition-colors group">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-dark-800 group-hover:text-carnivore-500/20 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-1 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-carnivore-500 fill-carnivore-500" />)}
              </div>

              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-carnivore-500/30">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white flex items-center gap-2">
                    {t.name}
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </h4>
                  <p className="text-xs text-carnivore-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};