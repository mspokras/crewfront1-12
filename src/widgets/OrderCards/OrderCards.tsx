import React, { useState } from 'react';
import './OrderCards.scss';
import OrderCard from '../../entities/Order/OrderCard/OrderCard';
import cardsData from './ordersData.json';
import redDot from '../../assets/icons/red-dot.png'

const OrderCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const isWithinLast24Hours = (dateString: string) => {
    const [day, month, year] = dateString.split('.').map(Number);
    const cardDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const timeDifference = Number(currentDate) - Number(cardDate);
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    console.log(cardDate);
    console.log(currentDate);
    console.log(hoursDifference);
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
    <div className='order-cards'>
      {sortedCardsData.map((card, index) => (
        <OrderCard 
          key={card.number} 
          className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
          onMouseEnter={() => setHoveredCard(card.number)}
          onMouseLeave={() => setHoveredCard(null)}
          {...card} 
        >
          {isWithinLast24Hours(card.date) && !(card.number === hoveredCard)
            && 
          <img src={redDot} className="red-dot" alt="highlight" />}
        </OrderCard>
      ))}
    </div>
  );
};

export default OrderCards;