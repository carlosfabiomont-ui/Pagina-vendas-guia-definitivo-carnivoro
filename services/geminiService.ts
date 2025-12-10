import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é um especialista renomado na Dieta Keto Carnívora e assistente de vendas do "Guia Iniciante Keto Carnívoro".
Seu objetivo é tirar dúvidas de potenciais clientes para aumentar a conversão de vendas.
O produto custa um valor acessível (mencione apenas se perguntarem preço: oferta especial hoje).
Principais benefícios da dieta: emagrecimento rápido, clareza mental, fim da inflamação, simplicidade (comer carne, ovos, gorduras).

Regras de conduta:
1. Responda de forma curta, persuasiva e direta (máximo 3 frases).
2. Seja empático com as dores (obesidade, cansaço, efeito sanfona).
3. Sempre finalize incentivando a compra do guia para saber o passo a passo exato.
4. Se perguntarem se podem comer algo fora da dieta (pão, açúcar), diga que o guia ensina como se livrar desses vícios sem sofrimento.
5. Use tom motivacional e autoritário (no bom sentido).
`;

// Respostas de segurança caso a IA falhe (Fallback)
const FALLBACK_RESPONSES: Record<string, string> = {
  cafe: "Sim! O café é permitido, mas sem açúcar. No Guia, ensinamos como turbinar seu café para te dar o dobro de energia e queimar gordura.",
  fome: "Jamais! Na dieta carnívora você come até a saciedade. A diferença é que a carne nutre de verdade, então sua fome desaparece por horas.",
  preço: "O valor é simbólico perto da transformação que você terá. Hoje está por apenas R$ 39,90 com acesso vitalício.",
  valor: "O valor é simbólico perto da transformação que você terá. Hoje está por apenas R$ 39,90 com acesso vitalício.",
  caro: "Caro é gastar com remédios e comidas que te adoecem. O Guia custa menos que uma pizza e muda sua vida para sempre.",
  doce: "A vontade de doces desaparece em poucos dias quando seu corpo se nutre de verdade. O Guia tem estratégias para essa fase de adaptação.",
  default: "Essa é uma dúvida comum! O Guia Keto Carnívoro cobre exatamente isso com um passo a passo detalhado. Vale muito a pena conferir o material completo."
};

const getFallbackResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('café') || lowerInput.includes('cafe')) return FALLBACK_RESPONSES.cafe;
  if (lowerInput.includes('fome')) return FALLBACK_RESPONSES.fome;
  if (lowerInput.includes('preço') || lowerInput.includes('valor') || lowerInput.includes('quanto')) return FALLBACK_RESPONSES.preço;
  if (lowerInput.includes('caro')) return FALLBACK_RESPONSES.caro;
  if (lowerInput.includes('doce') || lowerInput.includes('açúcar') || lowerInput.includes('acucar')) return FALLBACK_RESPONSES.doce;
  
  return FALLBACK_RESPONSES.default;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  // Se não houver chave configurada, usa o fallback imediatamente para não quebrar a experiência
  if (!process.env.API_KEY) {
    console.warn("API Key ausente. Usando resposta de fallback.");
    return getFallbackResponse(userMessage);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 150,
        thinkingConfig: { thinkingBudget: 0 },
      }
    });
    
    return response.text || getFallbackResponse(userMessage);
  } catch (error) {
    console.error("Erro na API Gemini (usando fallback):", error);
    // Em caso de erro (cota excedida, erro de rede), usa o fallback
    return getFallbackResponse(userMessage);
  }
};