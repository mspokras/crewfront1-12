import React, { useRef, useState } from 'react';
import './OrderCards.scss';
import OrderCard from '../../entities/Order/OrderCard/OrderCard';
import cardsData from './ordersData.json';
import redDot from '../../assets/icons/red-dot.png'
import FiltersBlockButton from '../../shared/components/Button/FiltersBlockButton/FiltersBlockButton';
import OrdersFilterBlock from '../../features/Filters/OrdersFilterBlock/OrdersFilterBlock';
import { IOrderFilters } from '../../entities/Order/orderTypes';
import { useClickOutside } from '../../services/customHooks';

const OrderCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isFilterBlockVisible, setFilterBlockVisibility] = useState(false);
  const [searchQuery, setSearchQuery] = useState<IOrderFilters>({
    status: '',
    date: '',
    location: '',
    organization: '',
  });

  const filterBlockRef = useRef(null);

  useClickOutside(filterBlockRef, () => {
    setFilterBlockVisibility(false);
  });


  const toggleFilterBlock = () => {
    setFilterBlockVisibility(!isFilterBlockVisible);
  }

  const handleInputChange = (value: string, category: string) => {
    setSearchQuery((prevSearchQuery) => ({
      ...prevSearchQuery,
      [category]: value,
    }));
  };

  const isWithinLast24Hours = (dateString: string) => {
    const [day, month, year] = dateString.split('.').map(Number);
    const cardDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const timeDifference = Number(currentDate) - Number(cardDate);
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    return hoursDifference < 24;
  };

  const sortedCardsData = cardsData.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;
  
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
  
    if (a.number > b.number) return -1;
    if (a.number < b.number) return 1;
    
    return 0;
  });

  return (
    <div className="order-cards-container">
      <div className="order-cards-header" ref={filterBlockRef}>
        <FiltersBlockButton onClick={toggleFilterBlock} />
        {isFilterBlockVisible 
          && 
        <OrdersFilterBlock 
          handleInputChange={handleInputChange} 
          searchQuery={searchQuery} 
        />}
      </div>
      <div className='order-cards-body'>
        {sortedCardsData.map((card, index) => (
          <OrderCard 
            key={card.number} 
            className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
            onMouseEnter={() => setHoveredCard(card.number)}
            onMouseLeave={() => setHoveredCard(null)}
            {...card} 
          >
            {isWithinLast24Hours(card.date) && !(card.number === hoveredCard) && !isFilterBlockVisible
              && 
            <img src={redDot} className="red-dot" alt="highlight" />}
          </OrderCard>
        ))}
      </div>
    </div>
  );
};

export default OrderCards;