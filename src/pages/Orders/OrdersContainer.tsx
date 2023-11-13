import React from 'react';
import './OrdersContainer.scss';
import TemplatePage from '../TemplatePage/TemplatePage';
import OrderCards from '../../widgets/OrderCards/OrderCards';

const OrdersContainer = () => {
  return (
    <div className='orders-container'>
      <TemplatePage title="Orders">
        <OrderCards />
      </TemplatePage>
    </div>
  );
};

export default OrdersContainer;