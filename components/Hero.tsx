import React from 'react';
import { Button } from './Button';
import { CheckCircle2, ArrowRight, Battery, Wifi, Signal } from 'lucide-react';

export const Hero = () => {
  const openCheckout = () => {
    window.open("https://pay.hotmart.com/W103017615F", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0 bg-dark-900">
      {/* Abstract Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-carnivore-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-carnivore-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Copy */}
          <div className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-carnivore-500/10 border border-carnivore-500/30 backdrop-blur-sm self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-carnivore-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-carnivore-500"></span>
              </span>
              <span className="text-carnivore-300 font-bold text-xs tracking-widest uppercase">
                Protocolo Definitivo
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-6 text-white">
              Transforme seu corpo com a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-carnivore-300 via-carnivore-400 to-carnivore-600 text-glow">
                Dieta Original
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-4 border-carnivore-500/30 pl-4 lg:pl-6 text-left">
              O método cientificamente comprovado para secar gordura e ganhar energia comendo carne de verdade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <Button onClick={openCheckout} pulse className="text-xl px-10 py-5 w-full sm:w-auto shadow-xl shadow-carnivore-500/10">
                BAIXAR O GUIA AGORA
                <ArrowRight className="inline-block ml-2 w-6 h-6" />
              </Button>
              <p className="text-xs text-gray-500 mt-2 sm:mt-0">
                <span className="block text-white font-bold">R$ 39,90</span>
                Acesso Vitalício
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-carnivore-500 flex-shrink-0" />
                <span>Zero Fome</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-carnivore-500 flex-shrink-0" />
                <span>100% Natural</span>
              </div>
            </div>
          </div>

          {/* Right Column: Steak + Phone App Composition */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000">
             
             <div className="relative w-[350px] md:w-[450px] h-[500px]">
                
                {/* 1. Background Steak Image (The Desire) */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-black border-2 border-dark-700 transform rotate-[-3deg] transition-transform hover:rotate-0 duration-500 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Bife Tomahawk Premium" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                  
                  {/* Title Overlay on the Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-display font-black text-white leading-none drop-shadow-xl uppercase">
                      Guia Definitivo<br/>
                      <span className="text-carnivore-400">Para Iniciantes</span><br/>
                      Na Dieta Carnívora
                    </h2>
                  </div>
                </div>

                {/* 2. Floating Phone Mockup (The App/Product) */}
                <div className="absolute -right-4 top-10 w-[240px] h-[480px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl transform rotate-[5deg] hover:rotate-[0deg] transition-all duration-500 z-10 hover:scale-105">
                  {/* Phone Notch/Island */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
                  
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-dark-800 rounded-[2.5rem] overflow-hidden flex flex-col relative">
                    
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 pt-3 pb-2 text-white text-[10px]">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <Signal size={12} />
                        <Wifi size={12} />
                        <Battery size={12} />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 p-4 flex flex-col items-center">
                       {/* App Logo */}
                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-carnivore-400 to-carnivore-600 flex items-center justify-center mb-4 shadow-lg shadow-carnivore-500/20">
                          <span className="text-2xl">🥩</span>
                       </div>
                       
                       <h3 className="text-white font-bold text-center mb-1">Keto Carnívora</h3>
                       <p className="text-xs text-gray-400 mb-6">App Oficial do Guia</p>

                       {/* App Dashboard UI Mockup */}
                       <div className="w-full space-y-3">
                          <div className="bg-dark-700/50 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                             <div>
                               <p className="text-[10px] text-gray-400">Jejum Atual</p>
                               <p className="text-sm font-bold text-white">16h 20m</p>
                             </div>
                             <div className="h-2 w-12 bg-carnivore-500 rounded-full"></div>
                          </div>

                          <div className="bg-dark-700/50 p-3 rounded-xl border border-white/5">
                             <p className="text-[10px] text-gray-400 mb-2">Refeição de Hoje</p>
                             <div className="h-24 bg-[url('https://images.unsplash.com/photo-1544025162-d76690b68f11?auto=format&fit=crop&q=80&w=200')] bg-cover rounded-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                   <span className="text-xs text-white font-bold">Ribeye Steak</span>
                                </div>
                             </div>
                          </div>

                          <div className="bg-carnivore-500 p-3 rounded-xl shadow-lg shadow-carnivore-500/20 mt-4">
                             <p className="text-xs font-bold text-dark-900 text-center">Acessar Guia Completo</p>
                          </div>
                       </div>
                    </div>

                    {/* Bottom Nav Mockup */}
                    <div className="h-14 bg-dark-900 border-t border-white/5 flex justify-around items-center px-4">
                       <div className="w-6 h-6 rounded bg-carnivore-500"></div>
                       <div className="w-6 h-6 rounded bg-dark-700"></div>
                       <div className="w-6 h-6 rounded bg-dark-700"></div>
                    </div>
                  </div>
                </div>

             </div>

          </div>

        </div>
      </div>
    </section>
  );
};