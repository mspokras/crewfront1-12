import React, { useState } from 'react';
import CustomerCard from '../../entities/Customer/CustomerCard/CustomerCard';
import cardsData from './customersData.json';
import './CustomerCards.scss';
import FilterTabButton from '../../shared/components/Button/FilterTabButton/FilterTabButton';
import CustomerFilters from '../../features/Filters/CustomerFilters/CustomerFilters';
// import { useGetRatingsQuery } from '../../entities/Customer/api/ratingApi';

const CustomerCards = () => {
  // const { data: ratingsData } = useGetRatingsQuery({ includeDetails: false });
  const [statusFilter, setStatusFilter] = useState("Needs Handling");
  const [externalFilter, setExternalFilter] = useState({organization: "", location: ""});
  const { organization: organizationFilter, location: locationFilter } = externalFilter;

  // useEffect(() => {
  //   if (ratingsData) {
  //     console.log(ratingsData);
  //   }
  // }, [ratingsData]);

  const filters = {
    needsHandling: 'Needs Handling',
    handled: 'Handled',
    all: 'All',
  };

  const sortedCardsData = cardsData.sort((a, b) => {
    const statusA = a.status;
    const statusB = b.status;

    const prioStatus = filters.needsHandling;
    if (statusA === prioStatus && statusB !== prioStatus) return -1;
    if (statusA !== prioStatus && statusB === prioStatus) return 1;
    return 0;
  });

  const handleFilterChange = (newFilter: string) => {
    setStatusFilter(newFilter);
  }

  const handleExternalFiltersChange = (organization: string, location: string) => {
    setExternalFilter({organization, location});
  };

  const filterCards = (status: string) => {
    if (statusFilter === filters.all) {
      return true;
    }
    return status === statusFilter;
  };

  const filterByExternal = (card: any) => {
    const organizationMatches = !organizationFilter || card.organization === organizationFilter;
    const locationMatches = !locationFilter || card.location === locationFilter;
    return organizationMatches && locationMatches;
  };

  return (
    <div className="customer-cards-container">
      <div className="customer-filters-section">
        <div className="customer-filters-status">
          {Object.values(filters).map((filter) => (
            <FilterTabButton 
              key={filter} 
              title={filter} 
              onClick={() => handleFilterChange(filter)} 
              isActive={statusFilter === filter} 
            />
          ))}
        </div>
        <CustomerFilters onFilterChange={handleExternalFiltersChange} />
      </div>
      <div className='customer-cards'>
        {sortedCardsData
          .filter((card) => filterCards(card.status) && filterByExternal(card))
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