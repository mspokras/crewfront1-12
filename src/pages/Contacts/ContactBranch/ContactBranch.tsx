import React, { useState } from 'react';
import './ContactBranch.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import BranchInput from '../../../shared/components/Input/BranchInput/BranchInput';

const ContactBranch = () => {
  const initialContactsData = [
    { name: 'Ella Adams', phone: '+1(555)123-4567', email: 'ella_adams@mcdonalds.org' },
    { name: 'Bob Marcheland', phone: '+1(765)856-4552', email: 'marcheland_work@mcdonalds.org' },
    { name: 'Charlie Windsorstone', phone: '+1(647)353-5242', email: 'charlie.winds@mcdonalds.org' },
  ];

  const [contacts, setContacts] = useState(initialContactsData);
  const [newContact, setNewContact] = useState({ name: '', phone: '', email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewContact({ ...newContact, [field]: e.target.value });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.email) {
      setContacts(prevContacts => [...prevContacts, newContact]);
      setNewContact({ name: '', phone: '', email: '' });
    }
  };

  return (
    <TemplateFormPage>
      <div className='contact-branch'>
        <div className="branch-name">McDonalds Kyiv</div>
        <div className="contact-branch-body">
          <div className="branch-org-info">
            <div className="branch-org-name">McDonalds Global Corp.</div>
            <SectionButton label="Organization page" path="/org-screen" />
            <div className="branch-supervisor">
              <div className="supervisor-title">Supervisor</div>
              <div className="supervisor-name">Alice Miller</div>
              <WhatsAppLink phone="+1(555)123-4567" className='supervisor-phone' />
              <EmailLink email="alice.miller@mcd.org" className="supervisor-email" />
            </div>
            <div className="branch-city"><b>City:</b> Kyiv</div>
            <div className="branch-district"><b>District:</b> Pecherskyy District</div>
            <div className="branch-workplace-type"><b>Workplace type:</b> Hybrid</div>
            <div className="branch-created-at"><b>Registered:</b> 11.07.2022</div>
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
            <div className="branch-new-product-inputs">
              <BranchInput label="Name" onChange={(e) => handleInputChange(e, 'name')} value={newContact.name} />
              <BranchInput label="Phone" onChange={(e) => handleInputChange(e, 'phone')} value={newContact.phone} />
              <BranchInput label="Email" onChange={(e) => handleInputChange(e, 'email')} value={newContact.email} />
            </div>
            <SectionButton label="+ Add Contact" onClick={handleAddContact} />
          </div>
        </div>
      </div>
    </TemplateFormPage>
  );
};

export default ContactBranch;