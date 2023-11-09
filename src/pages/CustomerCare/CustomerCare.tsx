import React from 'react';
import TemplatePage from '../TemplatePage/TemplatePage';
import './CustomerCare.scss';
import CustomerCards from '../../widgets/CustomerCards/CustomerCards';

const CustomerCare = () => {
  return (
    <div className='customer-care'>
      <TemplatePage title="Customer Care">
        <CustomerCards />
      </TemplatePage>
    </div>
  );
};

export default CustomerCare;