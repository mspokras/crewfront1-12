import React from 'react';
import star from '../../../assets/icons/star.svg'
import './CustomerCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';

interface PropTypes {
  rating: number;
  status: string;
  name: string;
  phone: string;
  email: string;
}
const CustomerCard = (props: PropTypes) => {
  const { rating, status, name, phone, email } = props;

  const openWhatsApp = () => {
    window.location.href = `https://wa.me/${phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const getStatusColor = () => {
    if (status === 'Handled') {
      return 'green';
    } else if (status === 'Needs Handling') {
      return 'crimson';
    }
    return 'black';
  };

  const stars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={star} alt="star" />
  ));

  return (
    <div className='customer-card card'>
      <div className='card-content'>
        <div className='card-visuals'>
          <div className='card-rating'>{stars}</div>
          <div className='card-status' style={{ color: getStatusColor() }}>{status}</div>
        </div>
        <div className='card-person'>
          <div className='card-name'>{name}</div>
          <a className='card-phone' href={`tel:${phone}`} onClick={openWhatsApp}>{phone}</a>
          <div className='card-email' onClick={handleEmailClick}>{email}</div>
        </div>
      </div>
      <SectionButton label="See order" />
    </div>
  );
};

export default CustomerCard;