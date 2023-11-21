import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import IconButton from '../../../shared/components/Button/IconButton/IconButton';
import googleIcon from '../../../assets/icons/google-login.svg';
import './LoginForm.scss';
import * as yup from "yup";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormWrapper from '../FormWrapper/FormWrapper';

const yupSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required()
    })
    .required();

type YupSchemaType = yup.InferType<typeof yupSchema>;

const LoginForm = () => {
    // const [ createAdmin ] = useCreateAdminMutation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } =
    useForm({
        mode: "onChange",
        resolver: yupResolver(yupSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onError: SubmitErrorHandler<any> = async (value) => {
        console.log("Error", value)
    }
    const onSubmitHandler: SubmitHandler<YupSchemaType> = async () => {
        // const {email, password} = value;
        try {
            // await createAdmin({
            //     email,
            //     password
            // });
            navigate('/dashboard')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <FormWrapper pageTitle="Sign In" page="login">
            <form className='login-form' onSubmit={handleSubmit(onSubmitHandler, onError)}>
                <div className='login-inputs'>
                    <FormInput
                        label="Email*"
                        placeholder="Enter your email"
                        {...register('email')}
                    />
                    <FormInput
                        label="Password*"
                        placeholder="Create a password"
                        {...register('password')}
                    />
                </div>
                <div className="login-passw-rule">Must be at least 8 characters.</div>
                <div className='login-btns'>
                    <SectionButton label='Log in' isFilled type="submit"/>
                    <IconButton icon={googleIcon} label="Sign in with Google"/>
                </div>
            </form>
        </FormWrapper>
    );
};

export default LoginForm;