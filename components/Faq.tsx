import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Tenho acesso imediato ao guia?",
      answer: "Sim! Assim que o pagamento for confirmado, você recebe um e-mail da Hotmart com o link para baixar o guia e todos os bônus imediatamente."
    },
    {
      question: "Funciona para quem não faz exercícios?",
      answer: "Com certeza. 80% do emagrecimento vem da alimentação. O exercício ajuda, mas o Guia Keto Carnívoro foi desenhado para queimar gordura mesmo em repouso."
    },
    {
      question: "Vou ter problemas de colesterol?",
      answer: "Esse é um mito antigo. O guia explica a ciência atualizada: o colesterol dietético tem pouco impacto no sangue para a maioria das pessoas, e a dieta carnívora foca em elevar o HDL (bom colesterol) e baixar triglicerídeos."
    },
    {
      question: "Sou iniciante total, consigo seguir?",
      answer: "Sim! O guia foi feito justamente para iniciantes. Ele tem a fase de adaptação detalhada para você não sofrer com a transição."
    },
    {
      question: "Preciso comprar suplementos caros?",
      answer: "Não. A dieta carnívora é sobre densidade nutricional real. Carne e ovos já contêm as vitaminas que você precisa. O guia ensina como economizar, não como gastar mais."
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Perguntas <span className="text-carnivore-500">Frequentes</span>
          </h2>
          <p className="text-gray-400">Tiramos suas dúvidas para você começar com segurança.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-dark-800 rounded-xl border border-dark-700 overflow-hidden hover:border-carnivore-500/30 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-5 h-5 text-carnivore-500 flex-shrink-0" />
                  <span className="font-bold text-gray-200">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-carnivore-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 pl-9 border-l-2 border-carnivore-500/20">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};