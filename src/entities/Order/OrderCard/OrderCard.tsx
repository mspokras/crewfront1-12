import React from 'react';
import './OrderCard.scss';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import classNames from "classnames";

interface PropTypes {
  className?: string;
  number: number;
  date: string;
  funds: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: React.ReactNode;
}

const OrderCard = (props: PropTypes) => {
  const { className, number, date, funds, children, onMouseEnter, onMouseLeave } = props;

  return (
    <div 
      className={classNames("order-card", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <div className="order-content">
        <div className="order-number">#{number}</div>
        <div className="order-date">{date}</div>
        <div className="order-funds">${funds}</div>
      </div>
      <SectionButton label="More details" isFilled={false} />
    </div>
  );
};

export default OrderCard;