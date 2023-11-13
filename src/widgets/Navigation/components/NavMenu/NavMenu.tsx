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
        <nav className='nav-menu'>
            <NavLink icon={iconDashboard} label="My Dashboard" path="/dashboard" />
            <NavLink icon={iconCustomer} label="Customer Care" path="/customer-care" />
            <NavLink icon={iconOrg} label="Organisations" path="/organisations" />
            <NavLink icon={iconContacts} label="Contacts" path="/contacts" />
            <NavLink icon={iconOrders} label="Orders" path="/orders" />
        </nav>
    );
};

export default BodyNavigation;