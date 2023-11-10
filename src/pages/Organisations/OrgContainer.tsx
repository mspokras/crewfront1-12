import React from 'react';
import './OrgContainer.scss';
import TemplatePage from '../TemplatePage/TemplatePage';
import OrgCards from '../../widgets/OrgCards/OrgCards';

const OrgContainer = () => {
  return (
    <div className='org-container'>
      <TemplatePage title="Organisations">
        <OrgCards />
      </TemplatePage>
    </div>
  );
};

export default OrgContainer;