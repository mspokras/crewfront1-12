import React from 'react';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import star from '../../../assets/icons/star.svg'
import './OrgCard.scss';

interface PropTypes {
  rating: number;
  name: string;
  orders: number;
  funds: number;
  phone: string;
  email: string;
}

const OrgCard = (props: PropTypes) => {
  const { rating, name, orders, funds, phone, email } = props;

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const openWhatsApp = () => {
    window.location.href = `https://wa.me/${phone}`;
  };
  
  return (
    <div className='org-card'>
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
          <a href={`tel:${phone}`} className="org-phone" onClick={openWhatsApp}>{phone}</a>
          <div className='org-email' onClick={handleEmailClick}>{email}</div>
        </div>
      </div>
      <SectionButton label="Show organisation" />
    </div>
  );
};

export default OrgCard;