
const GOOGLE_ADS_ID = 'AW-11360819651';
const CONVERSION_LABEL = 'fUpNCILkidUbEMOzoakq'; // Atualizado com o 'f' inicial do snippet

/**
 * Dispara eventos de conversão para o Google Analytics e Google Ads.
 * @param eventName Nome do evento (ex: 'begin_checkout', 'add_to_cart')
 * @param value Valor da conversão (padrão R$ 47,00)
 */
export const trackConversion = (eventName: string, value: number = 47.00) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // 1. Rastreamento Geral de Evento (Google Analytics / Google Tag)
    (window as any).gtag('event', eventName, {
      'currency': 'BRL',
      'value': value,
      'items': [{
        'item_id': 'guia_keto_carnivoro',
        'item_name': 'Guia Iniciante Keto Carnívoro',
        'price': value
      }]
    });

    // 2. Rastreamento Específico de Conversão Google Ads
    // Disparamos a conversão para eventos que indicam clara intenção de compra
    const purchaseIntentEvents = ['begin_checkout', 'add_to_cart', 'begin_checkout_sticky', 'purchase_click'];
    
    if (purchaseIntentEvents.includes(eventName)) {
      (window as any).gtag('event', 'conversion', {
        'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
        'value': value,
        'currency': 'BRL'
      });
      console.log(`[Tracking Ads] Conversão disparada: ${GOOGLE_ADS_ID}/${CONVERSION_LABEL} | Valor: ${value} BRL`);
    }
  } else {
    console.warn('[Tracking] gtag.js não detectado no objeto window.');
  }
};
