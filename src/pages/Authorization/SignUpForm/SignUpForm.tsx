import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.scss';
import FormWrapper from '../FormWrapper/FormWrapper';
import FormInput from '../../../shared/components/Input/FormInput/FormInput';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import IconButton from '../../../shared/components/Button/IconButton/IconButton';
import googleIcon from '../../../assets/icons/google-login.svg';
import { useCreateAdminMutation } from '../../../entities/Admin/api/adminApi';
import * as yup from "yup";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const yupSchema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required()
    })
    .required();

type YupSchemaType = yup.InferType<typeof yupSchema>;

const SignupForm = () => {
  const [ createAdmin ] = useCreateAdminMutation();
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
  } =
  useForm({
      mode: "onChange",
      resolver: yupResolver(yupSchema),
      defaultValues: {
        name: '',
        email: '',
        password: ''
      }
  });
  const onError: SubmitErrorHandler<any> = async (value) => {
      console.log("Error", value)
  }
  const onSubmitHandler: SubmitHandler<YupSchemaType> = async (value) => {
      const {email, password} = value;
      try {
          await createAdmin({
              email,
              password
          });
          navigate('/dashboard')
      } catch (e) {
          console.log(e);
      }
  }
  return (
    <FormWrapper pageTitle="Sign Up" page="signup">
      <form className='signup-form' onSubmit={handleSubmit(onSubmitHandler, onError)}>
        <div className='signup-inputs'>
          <FormInput
              label="Name*"
              placeholder="Enter your name"
              {...register('name')}
          />
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
        <div className="signup-passw-rule">Must be at least 8 characters.</div>
        <div className='signup-btns'>
            <SectionButton label='Get Started' isFilled type="submit"/>
            <IconButton icon={googleIcon} label="Sign in with Google"/>
        </div>
      </form>
    </FormWrapper>
  );
};

export default SignupForm;