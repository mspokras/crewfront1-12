import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import IconButton from '../../../shared/components/Button/IconButton/IconButton';
import googleIcon from '../../../assets/icons/google-login.svg';
import './LoginForm.scss';
import PageTitle from '../../../shared/components/Title/PageTitle/PageTitle';

const LoginForm = () => {
  return (
    <form className='login-form'>
      <PageTitle title="Sign In" />
      <div className='login-inputs'>
        <FormInput label="Email*" placeholder="Enter your email" />
        <FormInput label="Password*" placeholder="Create a password" />
      </div>
      <div className='login-btns'>
        <Link to='/dashboard'><SectionButton label='Log in' /></Link>
        <IconButton icon={googleIcon} label="Sign in with Google" />
      </div>
    </form>
  );
};

export default LoginForm;