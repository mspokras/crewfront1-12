import React from 'react';
import NavLink from "../../../../shared/components/Link/NavLink/NavLink"; 
import iconContacts from '../../../../assets/icons/nav-icon-contacts.svg';
import iconCustomer from '../../../../assets/icons/nav-icon-customer.svg';
import iconDashboard from '../../../../assets/icons/nav-icon-dashboard.svg';
import iconOrders from '../../../../assets/icons/nav-icon-orders.svg';
import iconOrg from '../../../../assets/icons/nav-icon-organisations.svg';
import './NavMenu.scss';

const BodyNavigation = () => {
    return (
        <div className='nav-menu'>
            <NavLink icon={iconDashboard} label="My Dashboard" />
            <NavLink icon={iconCustomer} label="Customer Care" />
            <NavLink icon={iconOrg} label="Organisations" />
            <NavLink icon={iconContacts} label="Contacts" />
            <NavLink icon={iconOrders} label="Orders" />
        </div>
    );
};

export default BodyNavigation;