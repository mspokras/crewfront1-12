import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import PageLogo from '../../../shared/components/PageLogo/PageLogo';
import bigLogo from '../../../assets/icons/logo-big.svg';
import './FormContainer.scss';

const FormContainer = () => {
  return (
    <div className='form-container'> 
      <div className='form-left'>
        <PageLogo />
        <div className="login-form-wrapper">          
          <LoginForm />
        </div>
      </div>
      <div className='form-right'>
        <img src={bigLogo} alt="crew-logo" />
      </div>
    </div>
  );
};

export default FormContainer;