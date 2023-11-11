import React from 'react';
import './OrgCards.scss';
import OrgCard from '../../entities/Organisation/OrgCard/OrgCard';

const OrgCards = () => {
  return (
    <div className='org-cards'>
      <OrgCard rating={4.5} name="McDonald's" orders={388} funds={260.000} phone="+1(555)222-33-22" email="contact@mcdonalds.com" />
      <OrgCard rating={4.2} name="Honda" orders={15} funds={24.000} phone="+1(342)135-64-27" email="hnd@gmail.com" />
      <OrgCard rating={4.8} name="Samsung" orders={62} funds={98.000} phone="+1(223)843-64-92" email="global.corp@samsung.org" />
      <OrgCard rating={3.6} name="Adidas" orders={252} funds={156.000} phone="+1(734)775-34-27" email="hr.department@adidas.com" />
      <OrgCard rating={4.9} name="Boeing" orders={107} funds={105.000} phone="+1(768)722-53-23" email="hr@boeing.com" />
      <OrgCard rating={4.6} name="Ford" orders={23} funds={75.000} phone="+1(997)547-33-26" email="recruitment@ford.org" />
    </div>
  );
};

export default OrgCards;