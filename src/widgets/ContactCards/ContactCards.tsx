import React from 'react';
import './ContactCards.scss';
import ContactCard from '../../entities/Customer/ContactCard/ContactCard';
import cardsData from './contactsData.json';

const ContactCards = () => {
  return (
    <div className='contact-cards'>
      {cardsData.map((card, index)=>(
        <ContactCard 
          key={card.id} 
          className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
          {...card} 
        />
      ))}
    </div>
  );
};

export default ContactCards;