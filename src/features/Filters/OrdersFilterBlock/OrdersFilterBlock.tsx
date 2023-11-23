import React from 'react';
import './OrdersFilterBlock.scss';
import OrdersFilter from './OrdersFilter/OrdersFilter';
import { IOrderFilters } from '../../../entities/Order/orderTypes';

interface PropTypes {
  searchQuery: IOrderFilters;
  handleInputChange: (value: string, category: string) => void;
}

const OrdersFilterBlock = (props: PropTypes) => {
  const { searchQuery, handleInputChange } = props;
  return (
    <div className='orders-filter-block'>
      <OrdersFilter 
        label="Status" 
        placeholder="Search status" 
        searchQuery={searchQuery} 
        handleInputChange={handleInputChange} 
      />
      <OrdersFilter 
        label="Date" 
        placeholder="DD-MM-YYYY" 
        searchQuery={searchQuery} 
        handleInputChange={handleInputChange} 
      />
      <OrdersFilter 
        label="Organization" 
        placeholder="Search organization" 
        searchQuery={searchQuery} 
        handleInputChange={handleInputChange} 
      />
      <OrdersFilter 
        label="Location" 
        placeholder="Search location" 
        searchQuery={searchQuery} 
        handleInputChange={handleInputChange} 
      />
    </div>
  );
};

export default OrdersFilterBlock;