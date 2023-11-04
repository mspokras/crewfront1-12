import React from 'react';
import './NavLink.scss';

interface propTypes {
    icon: string,
    label: string,
}

const NavLink = ({icon, label}: propTypes) => {
    return (
        <a href="#" className='nav-link'>
            <div className='nav-icon'>
                <img src={icon} alt="icon-dashboard" />
            </div>
            <div className='nav-label'>{label}</div>
        </a>
    );
};

export default NavLink;