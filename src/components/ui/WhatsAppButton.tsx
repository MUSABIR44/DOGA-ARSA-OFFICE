import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../../utils/constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;