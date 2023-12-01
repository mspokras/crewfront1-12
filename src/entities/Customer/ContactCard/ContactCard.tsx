import React, { useEffect, useState } from 'react';
import './ContactCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import classNames from 'classnames';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';
import { useGetBranchByIdQuery } from '../../Branch/api/branchApi';
import { Link } from 'react-router-dom';

interface PropTypes {
  className: string;
  branch: string;
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string
}

const ContactCard = (props: PropTypes) => {
  const { className, branch, firstName, lastName, company, email, phone } = props;
  const { data: branchData } = useGetBranchByIdQuery(branch);
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (branchData) {
      setLocation(branchData.city);
    }
  }, [branchData]);

  const branchLabel = `Branch: ${location}`; 
  return (
    <div className={classNames('contact-card', className)}>
      <div className="contact-content">
        <div className="contact-name">{firstName} {lastName}</div>
        <div className="contact-company">{company ?? 'Organization'}</div>
        <WhatsAppLink phone={phone} className='contact-phone' />
        <EmailLink email={email} className="contact-email" />
      </div>
      <Link to={'/contact-branch'} state={{branchData}}>
        <SectionButton label={branchLabel} isFilled={false} />
      </Link>
    </div>
  );
};

export default ContactCard;