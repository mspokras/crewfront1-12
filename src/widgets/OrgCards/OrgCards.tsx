import React from 'react';
import './OrgCards.scss';
import cardsData from './orgsData.json';
import OrgCard from '../../entities/Organisation/OrgCard/OrgCard';

const OrgCards = () => {
  return (
    <div className='org-cards'>
      {cardsData.map((card, index)=>(
        <OrgCard 
          key={card.id} 
          className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
          {...card} 
        />
      ))}
    </div>
  );
};

export default OrgCards;