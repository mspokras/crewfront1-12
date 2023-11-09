import React from 'react';
import TemplatePage from '../TemplatePage/TemplatePage';
import './CustomerCare.scss';
import CustomerCard from '../../entities/Customer/CustomerCard/CustomerCard';

const CustomerCare = () => {
  return (
    <div className='customer-care'>
      <TemplatePage title="Customer Care">
        <CustomerCard /> 
        <CustomerCard /> 
        <CustomerCard /> 
      </TemplatePage>
    </div>
  );
};

export default CustomerCare;