import React from 'react';
import './EmailLink.scss';

interface PropTypes {
  email: string;
  className?: string;
}
const EmailLink = ({ email, className }: PropTypes) => {
  return (
    <div className='email-link'>
      <a href={`mailto:${email}`} className={className}>{email}</a>
    </div>
  );
};

export default EmailLink;