import React, { useEffect, useState } from 'react';
import './OrgCards.scss';
import OrgCard from '../../entities/Organization/OrgCard/OrgCard';
import SectionButton from '../../shared/components/Button/SectionButton/SectionButton';
import OrgFilters from '../../features/Filters/OrgFilters/OrgFilters';
import { useGetOrganizationsQuery } from '../../entities/Organization/api/organizationApi';
import { IOrganization } from '../../entities/Organization/org.models';

const OrgCards = () => {
  const { data: orgData } = useGetOrganizationsQuery();
  const [organizations, setOrganizations] = useState<IOrganization[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCards = organizations.filter((card) =>
    card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (orgData) {
      setOrganizations(orgData);
    }
  }, [orgData]);

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  console.log(filteredCards);

  return (
    <div className='org-cards-container'>
      <div className="org-cards-header">
        <OrgFilters 
          searchQuery={searchQuery} 
          handleInputChange={handleInputChange} 
          placeholder="Search organization"
        />
        <SectionButton label="Add Organization" isFilled={true} path="/register-org" />
      </div>
      <div className="org-cards-body">
        {filteredCards.map((card, index)=>(
          <OrgCard 
            key={card._id} 
            className={index % 2 === 0 ? 'blue-card' : 'white-card'} 
            {...card} 
          />
        ))}
      </div>
    </div>
  );
};

export default OrgCards;