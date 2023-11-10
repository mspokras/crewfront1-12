import React from 'react';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import star from '../../../assets/icons/star.svg'
import './OrgCard.scss';

const OrgCard = () => {
  return (
    <div className='org-card'>
      <div className='org-content'>
        <div className='org-rating'>
          <img src={star} alt="star" />
          <div className='org-avnum'>4.5</div>
        </div>
        <div className='org-name'>McDonald's</div>
        <div className='org-stats'>
          <div className='org-orders'>
            <div className='org-orders-quantity'>388</div>
            <div className='org-orders-label'>Orders Made</div>
          </div>
          <div className='org-funds'>
            <div className='org-funds-quantity'>$90.000</div>
            <div className='org-funds-label'>Available Funds</div>
          </div>
        </div>
        <div className='org-contact'>
          <div className='org-whatsapp'>+1(555)222-33-22</div>
          <div className='org-email'>org.work.email@gmail.com</div>
        </div>
      </div>
      <SectionButton label="Show organisation" />
    </div>
  );
};

export default OrgCard;