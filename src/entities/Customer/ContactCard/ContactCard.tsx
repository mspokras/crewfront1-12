import React from 'react';
import './ContactCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import classNames from 'classnames';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';

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

  const branchLabel = `Branch: ${location}`; 
  return (
    <div className={classNames('contact-card', className)}>
      <div className="contact-content">
        <div className="contact-name">{name}</div>
        <div className="contact-company">{company}</div>
        <WhatsAppLink phone={phone} className='contact-phone' />
        <EmailLink email={email} className="contact-email" />
      </div>
      <SectionButton label={branchLabel} isFilled={true} />
    </div>
  );
};

export default ContactCard;