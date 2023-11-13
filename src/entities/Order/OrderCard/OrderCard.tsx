import React from 'react';
import './OrderCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';

interface PropTypes {
  number: number;
  date: string;
  funds: number
}

const OrderCard = (props: PropTypes) => {
  const { number, date, funds } = props;

  return (
    <div className='order-card'>
      <div className="order-content">
        <div className="order-number">#{number}</div>
        <div className="order-date">{date}</div>
        <div className="order-funds">${funds}</div>
      </div>
      <SectionButton label="More details" isFilled={true} />
    </div>
  );
};

export default OrderCard;