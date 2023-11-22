import React, { useState } from 'react';
import './CustomerFilters.scss';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';

interface PropTypes {
  onFilterChange: (organisation: string, location: string) => void;
}

const CustomerFilters = (props: PropTypes) => {
  const { onFilterChange } = props;
  const [selectedOrganisation, setSelectedOrganisation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleOrganisationChange = (value: string) => {
    setSelectedOrganisation(value);
    onFilterChange(value, selectedLocation);
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    onFilterChange(selectedOrganisation, value);
  };

  return (
    <div className='customer-external-filters'>
      <div className="customer-filters-label">Filter by</div>
      <div className="customer-filters-inputs">
        <FormInput
          type="text"
          id="organisation-filter"
          placeholder="Organisation"
          value={selectedOrganisation}
          onChange={(e) => handleOrganisationChange(e.target.value)}
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