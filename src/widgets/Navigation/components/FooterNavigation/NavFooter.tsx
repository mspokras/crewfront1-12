import React from 'react';
import NavLink from "../../../../shared/components/Link/NavLink/NavLink";
import Logout from "../../../../assets/icons/logout.svg";
import './NavFooter.scss';

const FooterNavigation = () => {
    return (
        <div className='nav-footer'>
            <NavLink icon={Logout} label="Log out" path="/" />
        </div>
    );
};

export default FooterNavigation;