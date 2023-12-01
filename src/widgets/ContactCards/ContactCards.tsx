import React, { useEffect, useState } from 'react';
import './ContactCards.scss';
import ContactCard from '../../entities/Customer/ContactCard/ContactCard';
import { useGetContactsQuery } from '../../entities/Contact/api/contactApi';
import { IContact } from '../../entities/Contact/contact.models';

const ContactCards = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const { data: contactsData } = useGetContactsQuery();

  useEffect(() => {
    if (contactsData) {
      setContacts(contactsData);
    }
  }, [contactsData]);

  return (
    <div className='contact-cards'>
      {contacts.map((card: any, index: number)=>(
        <ContactCard 
          key={card._id} 
          className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
          {...card} 
        />
      ))}
    </div>
  );
};

export default ContactCards;