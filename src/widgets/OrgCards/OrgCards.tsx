import React, { useState } from 'react';
import './OrgCards.scss';
import cardsData from './orgsData.json';
import OrgCard from '../../entities/Organisation/OrgCard/OrgCard';
import SectionButton from '../../shared/components/Button/SectionButton/SectionButton';
import OrgFilters from '../../features/Filters/OrgFilters/OrgFilters';

const OrgCards = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCards = cardsData.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className='org-cards-container'>
      <div className="org-cards-header">
        <SectionButton label="Add Organisation" isFilled={true} />
        <OrgFilters searchQuery={searchQuery} handleInputChange={handleInputChange} />
      </div>
      <div className="org-cards-body">
        {filteredCards.map((card, index)=>(
          <OrgCard 
            key={card.id} 
            className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
            {...card} 
          />
        ))}
      </div>
    </div>
  );
};

export default OrgCards;