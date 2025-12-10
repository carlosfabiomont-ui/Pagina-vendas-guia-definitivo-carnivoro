import React from 'react';
import { Hero } from './components/Hero';
import { ProblemAgitation } from './components/ProblemAgitation';
import { Solution } from './components/Solution';
import { SocialProof } from './components/SocialProof';
import { Modules } from './components/Modules';
import { ObjectionChat } from './components/ObjectionChat';
import { Footer } from './components/Footer';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { StickyCta } from './components/StickyCta';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 selection:bg-carnivore-600 selection:text-white pb-20 lg:pb-0">
      <main>
        <Hero />
        <ProblemAgitation />
        <Solution />
        
        {/* Social Proof added here to validate the solution before handling objections */}
        <SocialProof />

        {/* The Objection Chat acts as a conversion bridge before the offer details */}
        <ObjectionChat />
        
        <Modules />
        
        {/* Risk Reversal Section */}
        <Guarantee />
        
        {/* Final Objections Handling */}
        <Faq />
      </main>
      <Footer />
      
      {/* Mobile Conversion Booster */}
      <StickyCta />
    </div>
  );
}

export default App;