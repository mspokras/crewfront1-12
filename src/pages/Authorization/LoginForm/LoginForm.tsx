import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../shared/components/Button/IconButton/IconButton';
import googleIcon from '../../../assets/icons/google-login.svg';
import './LoginForm.scss';
import FormWrapper from '../FormWrapper/FormWrapper';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmitForm = () => navigate('/dashboard');

    return (
        <FormWrapper pageTitle="Sign In">
            <IconButton icon={googleIcon} label="Sign in with Google" onClick={handleSubmitForm} />
        </FormWrapper>
    );
};

export default LoginForm;