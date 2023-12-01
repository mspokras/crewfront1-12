/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import './ContactBranch.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import BranchInput from '../../../shared/components/Input/BranchInput/BranchInput';
import { useLocation } from 'react-router-dom';
import { useGetOrganizationByIdQuery } from '../../../entities/Organization/api/organizationApi';
import { useGetContactByIdQuery } from '../../../entities/Contact/api/contactApi';
import { IContact } from '../../../entities/Contact/contact.models';

const ContactBranch = () => {
  const [orgName, setOrgName] = useState('');
  const location = useLocation();

  const { branchData } = location.state || {}; 
  const { city, contacts: contactsIds, creationDate: creationDateRaw, district, name, 
  supervisorFirstname, supervisorLastname, supervisorMobile, workplaceType } = branchData;

  const { data: orgData } = useGetOrganizationByIdQuery(branchData.organization);
  const creationDateConv = new Date(creationDateRaw);
  const creationDate = creationDateConv.toLocaleString();

//   const [contacts, setContacts] = useState<IContact[]>([]);
//   const useContactData = (contactId: string) => {
//     const { data: contactData } = useGetContactByIdQuery(contactId);
//     return contactData;
//   }

//   useEffect(()=>{
//   contactsIds.forEach((id: string) => {
//     const contactData = useContactData(id);
//     console.log(contactData);
//   })
// }, [contacts, contactsIds]);
  
  // useEffect(()=>{
  //   contactsIds.forEach((id: string) => {
  //     const contactData = useContactData(id);
  //     contacts.push(contactData);
  //   })
  // }, [contacts, contactsIds]);

  // console.log(contact);

  // const { data: contactData } = useGetContactByIdQuery("656728cebf96316f8fed5560");
  // console.log(contactData);

  // const [contacts, setContacts] = useState<unknown[]>([]);
  // const contactsS = contactsIds.map((contactId: string) => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks

  //   return contactData;
  // });
  // console.log(contactsS);

  useEffect(() => {
    if (orgData) {
      setOrgName(orgData.name);
    }
  }, [orgData]);
  
  const initialContactsData = [
    { name: 'Ella Adams', phone: '+1(555)123-4567', email: 'ella_adams@mcdonalds.org' },
    { name: 'Bob Marcheland', phone: '+1(765)856-4552', email: 'marcheland_work@mcdonalds.org' },
    { name: 'Charlie Windsorstone', phone: '+1(647)353-5242', email: 'charlie.winds@mcdonalds.org' },
  ];

  const [contactss, setContactss] = useState(initialContactsData);
  const [newContact, setNewContact] = useState({ name: '', phone: '', email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewContact({ ...newContact, [field]: e.target.value });
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone && newContact.email) {
      setContactss(prevContacts => [...prevContacts, newContact]);
      setNewContact({ name: '', phone: '', email: '' });
    }
  };

  return (
    <TemplateFormPage>
      <div className='contact-branch'>
        <div className="branch-name">{name}</div>
        <div className="contact-branch-body">
          <div className="branch-org-info">
            <div className="branch-org-name">{orgName}</div>
            <SectionButton label="Organization page" path="/org-screen" />
            <div className="branch-supervisor">
              <div className="supervisor-title">Supervisor</div>
              <div className="supervisor-name">{supervisorFirstname} {supervisorLastname}</div>
              <WhatsAppLink phone={supervisorMobile} className='supervisor-phone' />
              <EmailLink email="alice.miller@mcd.org" className="supervisor-email" />
            </div>
            <div className="branch-city"><b>City:</b> {city}</div>
            <div className="branch-district"><b>District:</b> {district}</div>
            <div className="branch-workplace-type"><b>Workplace type:</b> {workplaceType}</div>
            <div className="branch-created-at"><b>Registered:</b> {creationDate}</div>
          </div>
          <div className="branch-contact">
            <div className="branch-contact-title">Contacts</div>
            {contactss.map((contact, index) => (
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