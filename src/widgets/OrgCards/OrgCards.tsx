import React from 'react';
import './OrgCards.scss';
import cardsData from './orgsData.json';
import OrgCard from '../../entities/Organisation/OrgCard/OrgCard';

const OrgCards = () => {
  return (
    <div className='org-cards'>
      {cardsData.map((card, index)=>(
        <OrgCard key={index} {...card} />
      ))}
    </div>
  );
};

export default OrgCards;