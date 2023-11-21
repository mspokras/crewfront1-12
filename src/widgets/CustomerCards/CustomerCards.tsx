import React, { useState } from 'react';
import CustomerCard from '../../entities/Customer/CustomerCard/CustomerCard';
import cardsData from './customersData.json';
import './CustomerCards.scss';
import FilterButton from '../../shared/components/Button/FilterButton/FilterButton';

const CustomerCards = () => {
  const [currentFilter, setCurrentFilter] = useState("Needs Handling");
  const filters = {
    needsHandling: 'Needs Handling',
    handled: 'Handled',
    all: 'All',
  };

  const handleFilterChange = (newFilter: string) => {
    setCurrentFilter(newFilter);
  }

  const filterCards = (status: string) => {
    if (currentFilter === filters.all) {
      return true;
    }
    return status === currentFilter;
  };

  return (
    <div className="customer-cards-container">
      <div className="customer-filters">
        {Object.values(filters).map((filter) => (
          <FilterButton key={filter} title={filter} onClick={() => handleFilterChange(filter)} isActive={currentFilter === filter} />
        ))}
      </div>
      <div className='customer-cards'>
        {cardsData
          .filter((card) => filterCards(card.status))
          .map((card, index) => (
            <CustomerCard 
              key={card.id} 
              className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
              {...card} 
            />
        ))}
      </div>
    </div>
  );
};

export default CustomerCards;