import React from 'react';
import './OrgCards.scss';
import OrgCard from '../../entities/Organisation/OrgCard/OrgCard';

const OrgCards = () => {
  return (
    <div className='org-cards'>
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
    </div>
  );
};

export default OrgCards;