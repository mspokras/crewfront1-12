import React from 'react';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import star from '../../../assets/icons/star.svg'
import './OrgCard.scss';
import classNames from 'classnames';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';

interface PropTypes {
  className: string;
  ratingsAverage?: number;
  name: string;
  ordersAmount?: number;
  balance: number;
  primaryContact?: any;
}

const OrgCard = (props: PropTypes) => {
  const { className, ratingsAverage, name, ordersAmount, balance, primaryContact } = props;

  return (
    <div className={classNames('org-card', className)}>
      <div className='org-content'>
        <div className='org-rating'>
          <img src={star} alt="star" />
          <div className='org-avnum'>{ratingsAverage ?? ''}</div>
        </div>
        <div className='org-name'>{name}</div>
        <div className='org-stats'>
          <div className='org-orders'>
            <div className='org-orders-quantity'>{ordersAmount}</div>
            <div className='org-orders-label'>Orders Made</div>
          </div>
          <div className='org-funds'>
            <div className='org-funds-quantity'>${balance}</div>
            <div className='org-funds-label'>Available Funds</div>
          </div>
        </div>
        <div className='org-contact'>
          <WhatsAppLink phone={primaryContact?.phone ?? ''} className='org-phone' />
          <EmailLink email={primaryContact?.email ?? ''} className="org-email" />
         </div>
      </div>
      <SectionButton label="Show organization" isFilled={false} path="/org-screen" />
    </div>
  );
};

export default OrgCard;