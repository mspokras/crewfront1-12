import React from 'react';
import './NavLink.scss';
import { Link } from 'react-router-dom';

interface PropTypes {
    icon: string,
    label: string,
    path: string
}

const NavLink = ({icon, label, path}: PropTypes) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link to={path} className='nav-link'>
            <div className='nav-icon'>
                <img src={icon} alt="icon-dashboard" />
            </div>
            <div className='nav-label'>{label}</div>
        </Link>
    );
};

export default NavLink;