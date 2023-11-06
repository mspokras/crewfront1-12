import React from 'react';
import PageTitle from '../Title/PageTitle/PageTitle';
import Logo from '../../../assets/icons/logo.svg';
import './PageLogo.scss';

const PageLogo = () => {
  return (
    <div className='page-logo'>
      <img className='img-logo' src={Logo} alt="header-navigation" />
      <PageTitle title="Crew" />
    </div>
  );
};

export default PageLogo;