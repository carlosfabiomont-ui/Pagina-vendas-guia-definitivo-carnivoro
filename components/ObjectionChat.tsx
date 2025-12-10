import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatStatus } from '../types';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const ObjectionChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a IA especialista em Carnívora. Tem dúvidas se essa dieta é para você? Pergunte-me qualquer coisa!' }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<ChatStatus>(ChatStatus.IDLE);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setStatus(ChatStatus.LOADING);

    const response = await sendMessageToGemini(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setStatus(ChatStatus.SUCCESS);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark-800 to-dark-900 border-y border-carnivore-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-dark-950 rounded-2xl shadow-2xl border border-dark-700 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side Info */}
          <div className="md:w-1/3 bg-carnivore-900/10 p-8 border-r border-dark-700 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-carnivore-400 to-carnivore-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-carnivore-500/20 animate-pulse">
              <Sparkles className="text-dark-900 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">Ainda com dúvida?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Nossa Inteligência Artificial foi treinada para responder suas maiores inseguranças sobre a dieta.
            </p>
            <div className="space-y-2 text-left w-full">
              <p className="text-xs font-bold text-carnivore-500 uppercase tracking-wider mb-2">Perguntas comuns:</p>
              <button onClick={() => setInput("Vou sentir fome?")} className="block w-full text-left text-xs p-2 rounded bg-dark-800 hover:bg-dark-700 text-gray-300 transition-colors">"Vou sentir fome?"</button>
              <button onClick={() => setInput("Posso tomar café?")} className="block w-full text-left text-xs p-2 rounded bg-dark-800 hover:bg-dark-700 text-gray-300 transition-colors">"Posso tomar café?"</button>
              <button onClick={() => setInput("É caro fazer essa dieta?")} className="block w-full text-left text-xs p-2 rounded bg-dark-800 hover:bg-dark-700 text-gray-300 transition-colors">"É caro fazer essa dieta?"</button>
            </div>
          </div>

          {/* Right Side Chat */}
          <div className="md:w-2/3 flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto p-6 space-y-4" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-dark-700 text-gray-300' : 'bg-carnivore-500 text-dark-900'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-dark-700 text-white' : 'bg-carnivore-500/10 text-carnivore-100 border border-carnivore-500/20'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {status === ChatStatus.LOADING && (
                <div className="flex justify-start">
                   <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-carnivore-500 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-dark-900" />
                    </div>
                    <div className="p-3 rounded-lg bg-carnivore-500/10 border border-carnivore-500/20 flex items-center">
                      <Loader2 className="animate-spin w-4 h-4 text-carnivore-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-dark-900 border-t border-dark-700">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua dúvida aqui..."
                  className="flex-1 bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-carnivore-500 transition-colors"
                />
                <Button 
                  onClick={handleSend} 
                  disabled={status === ChatStatus.LOADING || !input.trim()}
                  className="!py-3 !px-4"
                >
                  <Send size={20} />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};