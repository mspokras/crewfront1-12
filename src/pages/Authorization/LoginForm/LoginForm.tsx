import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import IconButton from '../../../shared/components/Button/IconButton/IconButton';
import googleIcon from '../../../assets/icons/google-login.svg';
import './LoginForm.scss';
import PageTitle from '../../../shared/components/Title/PageTitle/PageTitle';
import ApiService from '../../../services/ApiService';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await ApiService.createAdmin(email, password);
      if (response && response.success) {
        return <Link to="/dashboard" />;
      } else {
        setLoginError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setLoginError('An error occurred while logging in.');
    }
  };


  return (
    <form className='login-form'>
      <PageTitle title="Sign In" />
      <div className='login-inputs'>
        <FormInput 
          label="Email*" 
          placeholder="Enter your email" 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
        />
        <FormInput 
          label="Password*" 
          placeholder="Create a password" 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
        />
      </div>
      <div className='login-btns'>
        <Link to='/dashboard'><SectionButton label='Log in' isFilled onClick={handleLogin} /></Link>
        <IconButton icon={googleIcon} label="Sign in with Google" />
      </div>
      {loginError && <p className="login-error">{loginError}</p>}
    </form>
  );
};

export default LoginForm;