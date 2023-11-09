import React from 'react';
import CustomerCard from '../../entities/Customer/CustomerCard/CustomerCard';
import './CustomerCards.scss';

const CustomerCards = () => {
  return (
    <div className='customer-cards'>
      <CustomerCard rating={4} status="Needs Handling" name="James Bond" email="james.bond@gmail.com" phone="+1(406)785-9989" />
      <CustomerCard rating={5} status="Handled" name="Alex Reynolds" email="alex.reynolds@gmail.com" phone="+44(793)274-4455" />
      <CustomerCard rating={3} status="Needs Handling" name="Emily Chen" email="emily.chen@gmail.com" phone="+1(223)452-5523" />
      <CustomerCard rating={4} status="Handled" name="Daniel Mitchell" email="daniel.mitchell@gmail.com" phone="+1(596)343-3443" />
      <CustomerCard rating={5} status="Handled" name="Olivia Foster" email="olivia.foster@gmail.com" phone="+61(214)323-4564" />
      <CustomerCard rating={4} status="Handled" name="Ethan Martinez" email="ethan.martinez@gmail.com" phone="+52(800)356-3233" />
    </div>
  );
};

export default CustomerCards;