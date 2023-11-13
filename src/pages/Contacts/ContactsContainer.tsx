import React from 'react';
import './ContactsContainer.scss';
import TemplatePage from '../TemplatePage/TemplatePage';
import ContactCards from '../../widgets/ContactCards/ContactCards';

const ContactsContainer = () => {
  return (
    <div className='contacts-container'>
      <TemplatePage title="Contacts">
        <ContactCards />
      </TemplatePage>
    </div>
  );
};

export default ContactsContainer;