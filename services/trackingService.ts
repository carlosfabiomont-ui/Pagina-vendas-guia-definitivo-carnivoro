const GOOGLE_ADS_ID = 'AW-11360819651';
const CONVERSION_LABEL = 'UpNCILkidUbEMOzoakq';

export const trackConversion = (eventName: string, value: number = 47.00) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Rastreamento Geral (Analytics)
    (window as any).gtag('event', eventName, {
      'currency': 'BRL',
      'value': value
    });

    // Rastreamento Específico de Conversão Google Ads
    // Chamamos isso apenas nos momentos de intenção de compra clara
    if (eventName === 'begin_checkout' || eventName === 'purchase_click') {
      (window as any).gtag('event', 'conversion', {
        'send_to': `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
        'value': value,
        'currency': 'BRL'
      });
      console.log('Google Ads Conversion Triggered');
    }
  } else {
    console.warn('Google Analytics (gtag) não carregado ou indisponível.');
  }
};