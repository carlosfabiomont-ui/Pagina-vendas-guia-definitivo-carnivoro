import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark-950 py-12 border-t border-dark-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-display font-bold text-white mb-4">Guia <span className="text-carnivore-500">Keto Carnívoro</span></p>
        <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
          Este produto não substitui o parecer profissional. Sempre consulte um profissional da saúde para tratar de assuntos relativos à saúde.
        </p>
        <div className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};