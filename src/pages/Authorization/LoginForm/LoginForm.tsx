import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../shared/components/Button/IconButton/IconButton';
import googleIcon from '../../../assets/icons/google-login.svg';
import './LoginForm.scss';
import FormWrapper from '../FormWrapper/FormWrapper';
import { provider } from '../../../services/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useTriggerAdminMutation } from '../../../entities/Admin/api/adminApi';
import { saveToken } from '../../../entities/Admin/admin.models';

const auth = getAuth();

const LoginForm = () => {
    const navigate = useNavigate();
    const [triggerAdmin] = useTriggerAdminMutation();
    
    const handleSubmitForm = async () => {
        signInWithPopup(auth, provider)
        .then(async (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const { uid, email, accessToken } = result.user as any;
            saveToken(accessToken!);
            console.log(result);
            console.log(token);
            await triggerAdmin({ email: email!, uid }).unwrap();
            
            navigate('/dashboard');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, credential);
        });
    };

    return (
        <FormWrapper pageTitle="Sign In">
            <IconButton icon={googleIcon} label="Sign in with Google" onClick={handleSubmitForm} />
        </FormWrapper>
    );
};

export default LoginForm;