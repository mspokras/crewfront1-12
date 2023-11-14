import React from 'react';
import './OrderCards.scss';
import OrderCard from '../../entities/Order/OrderCard/OrderCard';
import cardsData from './ordersData.json';

const OrderCards = () => {
  return (
    <div className='order-cards'>
      {cardsData.map((card, index) => (
        <OrderCard 
          key={card.number} 
          className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
          {...card} 
        />
      ))}
    </div>
  );
};

export default OrderCards;