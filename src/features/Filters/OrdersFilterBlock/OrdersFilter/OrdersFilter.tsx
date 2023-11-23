import React from 'react';
import './OrdersFilter.scss';
import OrgFilters from '../../OrgFilters/OrgFilters';
import { IOrderFilters } from '../../../../entities/Order/orderTypes';

interface PropTypes {
  label: string;
  placeholder?: string;
  searchQuery: IOrderFilters;
  handleInputChange: (value: string, category: string) => void;
}

const OrdersFilter = (props: PropTypes) => {
  const { label, placeholder, searchQuery, handleInputChange } = props;

  const category = label.toLowerCase();

  const handleChange = (value: string) => {
    handleInputChange(value, category);
  }
  return (
    <div className='orders-filter'>
      <div className="orders-filter-label">{label}</div>
      <OrgFilters 
        placeholder={placeholder}
        searchQuery={searchQuery[category as keyof IOrderFilters]} 
        handleInputChange={handleChange} 
        isDate={category === 'date'}
      />
    </div>
  );
};

export default OrdersFilter;