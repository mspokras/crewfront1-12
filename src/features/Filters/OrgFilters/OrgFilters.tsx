import React from 'react';
import './OrgFilters.scss';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';

interface PropTypes {
  handleInputChange: (value: string) => void;
  placeholder?: string;
  searchQuery?: string;
  isDate?: boolean;
}
const OrgFilters = (props: PropTypes) => {
  const { handleInputChange, placeholder, searchQuery, isDate } = props;
  return (
    <div className='org-filters'>
      <FormInput 
        type="search"
        id="search-form"
        placeholder={placeholder}
        value={searchQuery || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
        isDate={isDate}
      />
    </div>
  );
};

export default OrgFilters;