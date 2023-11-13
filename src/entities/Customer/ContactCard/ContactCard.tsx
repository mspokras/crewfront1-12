import React from 'react';
import './ContactCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import classNames from 'classnames';

interface PropTypes {
  className: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string
}

const ContactCard = (props: PropTypes) => {
  const { className, name, company, email, phone, location } = props;

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const openWhatsApp = () => {
    window.location.href = `https://wa.me/${phone}`;
  };

  const branchLabel = `Branch: ${location}`; 
  return (
    <div className={classNames('contact-card', className)}>
      <div className="contact-content">
        <div className="contact-name">{name}</div>
        <div className="contact-company">{company}</div>
        <a href={`tel:${phone}`} className="contact-phone" onClick={openWhatsApp}>{phone}</a>
        <div className='contact-email' onClick={handleEmailClick}>{email}</div>
      </div>
      <SectionButton label={branchLabel} isFilled={true} />
    </div>
  );
};

export default ContactCard;