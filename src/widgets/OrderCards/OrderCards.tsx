import React from 'react';
import './OrderCards.scss';
import OrderCard from '../../entities/Order/OrderCard/OrderCard';

const OrderCards = () => {
  return (
    <div className='order-cards'>
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default OrderCards;