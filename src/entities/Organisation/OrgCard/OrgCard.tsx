import React from 'react';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import star from '../../../assets/icons/star.svg'
import './OrgCard.scss';
import classNames from 'classnames';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';

interface PropTypes {
  className: string;
  rating: number;
  name: string;
  orders: number;
  funds: number;
  phone: string;
  email: string;
}

const OrgCard = (props: PropTypes) => {
  const { className, rating, name, orders, funds, phone, email } = props;

  return (
    <div className={classNames('org-card', className)}>
      <div className='org-content'>
        <div className='org-rating'>
          <img src={star} alt="star" />
          <div className='org-avnum'>{rating.toFixed(1)}</div>
        </div>
        <div className='org-name'>{name}</div>
        <div className='org-stats'>
          <div className='org-orders'>
            <div className='org-orders-quantity'>{orders}</div>
            <div className='org-orders-label'>Orders Made</div>
          </div>
          <div className='org-funds'>
            <div className='org-funds-quantity'>${funds}</div>
            <div className='org-funds-label'>Available Funds</div>
          </div>
        </div>
        <div className='org-contact'>
          <WhatsAppLink phone={phone} className='org-phone' />
          <EmailLink email={email} className="org-email" />
         </div>
      </div>
      <SectionButton label="Show organisation" />
    </div>
  );
};

export default OrgCard;