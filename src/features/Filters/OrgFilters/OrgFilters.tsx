import React from 'react';
import './OrgFilters.scss';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';

interface PropTypes {
  searchQuery?: string;
  handleInputChange: (value: string) => void;
}
const OrgFilters = (props: PropTypes) => {
  const { searchQuery, handleInputChange } = props;
  return (
    <div className='org-filters'>
      <FormInput 
        type="search"
        id="search-form"
        placeholder="Search organisation"
        value={searchQuery || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default OrgFilters;