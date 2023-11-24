import React from 'react';
import './ContactBranch.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';

const ContactBranch = () => {
  const contacts = [
    { name: 'Ella Adams', phone: '+1(555)123-4567', email: 'ella_adams@mcdonalds.org' },
    { name: 'Bob Marcheland', phone: '+1(765)856-4552', email: 'marcheland_work@mcdonalds.org' },
    { name: 'Charlie Windsorstone', phone: '+1(647)353-5242', email: 'charlie.winds@mcdonalds.org' },
  ];

  return (
    <TemplateFormPage>
      <div className='contact-branch'>
        <div className="branch-name">
          McDonalds Kyiv
        </div>
        <div className="contact-branch-body">
          <div className="branch-org-info">
            <div className="branch-org-name">McDonalds Global Corp.</div>
            <div className="branch-supervisor">
              <div className="supervisor-title">Supervisor</div>
              <div className="supervisor-name">Alice Miller</div>
              <WhatsAppLink phone="+1(555)123-4567" className='supervisor-phone' />
              <EmailLink email="alice.miller@mcd.org" className="supervisor-email" />
            </div>
            <div className="branch-orders-num"><b>Total orders:</b> 14</div>
            <div className="branch-orders-open"><b>Needs handling:</b> 3</div>
            <div className="branch-orders-budget"><b>Current budget:</b> 9600$</div>
          </div>
          <div className="branch-contact">
            <div className="branch-contact-title">Contacts</div>
            {contacts.map((contact, index) => (
              <div className="branch-contact-item" key={index}>
                <div className="branch-contact-name">{contact.name}</div>
                <WhatsAppLink phone={contact.phone} className='branch-contact-phone' />
                <EmailLink email={contact.email} className="branch-contact-email" />
              </div>
            ))}
            <SectionButton label="+ Add Contact" path="/contacts" />
          </div>
        </div>
      </div>
    </TemplateFormPage>
  );
};

export default ContactBranch;