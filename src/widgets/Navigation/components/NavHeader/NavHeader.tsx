import React from 'react';
import Logo from '../../../../assets/icons/logo.svg';
import './NavHeader.scss';
import PageTitle from '../../../../shared/components/Title/PageTitle/PageTitle';

const HeaderNavigation = () => {
    return (
        <div className='nav-header'>
            <img className='nav-logo' src={Logo} alt="header-navigation" />
            <PageTitle>Crew</PageTitle>
        </div>
    );
};

export default HeaderNavigation;