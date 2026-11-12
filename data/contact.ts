/**
 * Global Contact & Communication Constants for DataLive Intelligence
 */
export const CONTACT_INFO = {
  rawPhone: '6381771021',
  countryCode: '+91',
  fullPhone: '+916381771021',
  phoneDisplay: '+91 63817 71021',
  phoneHref: 'tel:+916381771021',
  whatsappNumber: '916381771021',
  whatsappDisplay: '+91 63817 71021',
  email: 'dataliveintelligence@gmail.com',
  emailHref: 'mailto:dataliveintelligence@gmail.com',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM IST',
  slaGuarantee: 'Response within 4 business hours',
  address: 'Global Delivery & India Regional Hubs',

  /**
   * Generates a direct WhatsApp link with a custom or default inquiry message
   */
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMessage =
      'Hello DataLive Intelligence team, I would like to explore automating our company MIS and Power BI reports.';
    const msg = customMessage || defaultMessage;
    return `https://wa.me/916381771021?text=${encodeURIComponent(msg)}`;
  },
} as const;

export default CONTACT_INFO;

