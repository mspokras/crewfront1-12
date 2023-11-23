import React from 'react';
import './OrgContainer.scss';
import TemplatePage from '../TemplatePage/TemplatePage';
import OrgCards from '../../widgets/OrgCards/OrgCards';

const OrgContainer = () => {
  return (
    <div className='org-container'>
      <TemplatePage title="Organizations">
        <OrgCards />
      </TemplatePage>
    </div>
  );
};

export default OrgContainer;