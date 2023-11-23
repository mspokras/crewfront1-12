import React, { useState } from 'react';
import './CustomerFilters.scss';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';

interface PropTypes {
  onFilterChange: (organization: string, location: string) => void;
}

const CustomerFilters = (props: PropTypes) => {
  const { onFilterChange } = props;
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleOrganizationChange = (value: string) => {
    setSelectedOrganization(value);
    onFilterChange(value, selectedLocation);
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    onFilterChange(selectedOrganization, value);
  };

  return (
    <div className='customer-external-filters'>
      <div className="customer-filters-label">Filter by</div>
      <div className="customer-filters-inputs">
        <FormInput
          type="text"
          id="organization-filter"
          placeholder="Organization"
          value={selectedOrganization}
          onChange={(e) => handleOrganizationChange(e.target.value)}
        />
        <FormInput
          type="text"
          id="location-filter"
          placeholder="Location"
          value={selectedLocation}
          onChange={(e) => handleLocationChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerFilters;