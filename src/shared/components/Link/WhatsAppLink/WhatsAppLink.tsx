import React from 'react';
import './WhatsAppLink.scss';

interface PropTypes {
  phone: string;
  className?: string;
}
const WhatsAppLink = ({ phone, className}: PropTypes) => {
  const openWhatsApp = () => {
    window.location.href = `https://wa.me/${phone}`;
  };
  
  return (
    <a href={`tel:${phone}`} className={className} onClick={openWhatsApp}>{phone}</a>
  );
};

export default WhatsAppLink;