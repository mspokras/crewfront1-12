import React from 'react';
import star from '../../../assets/icons/star.svg'
import './CustomerCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import classNames from "classnames";
import Rating from '@mui/material/Rating';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import WhatsAppLink from '../../../shared/components/Link/WhatsAppLink/WhatsAppLink';

interface PropTypes {
  className: string;
  rating: number;
  status: string;
  name: string;
  phone: string;
  email: string;
}
const CustomerCard = (props: PropTypes) => {
  const { className, rating, status, name, phone, email } = props;

  const statusColorMap: { [key: string]: string } = {
    'Handled': 'green',
    'Needs Handling': 'crimson'
  };

  return (
    <div className={classNames('customer-card', className)}>
      <div className='card-content'>
        <div className='card-visuals'>
          <Rating 
            className="card-rating" 
            value={rating} 
            readOnly 
            emptyIcon={<img src={star} alt="star" style={{display: "none"}} />} 
          />
          <div className='card-status' style={{ color: statusColorMap[status] }}>{status}</div>
        </div>
        <div className='card-person'>
          <div className='card-name'>{name}</div>
          <WhatsAppLink phone={phone} className='card-phone' />
          <EmailLink email={email} className="card-email" />
        </div>
      </div>
      <SectionButton label="See order" />
    </div>
  );
};

export default CustomerCard;