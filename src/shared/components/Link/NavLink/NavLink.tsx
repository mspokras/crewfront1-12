import React from 'react';
import './NavLink.scss';

interface PropTypes {
    icon: string,
    label: string,
}

const NavLink = ({icon, label}: PropTypes) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className='nav-link'>
            <div className='nav-icon'>
                <img src={icon} alt="icon-dashboard" />
            </div>
            <div className='nav-label'>{label}</div>
        </a>
    );
};

export default NavLink;