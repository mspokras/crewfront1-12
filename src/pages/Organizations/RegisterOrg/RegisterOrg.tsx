import React from 'react';
import './RegisterOrg.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import RegOrgSection from '../../../features/RegOrgSection/RegOrgSection';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import { regOrgInputsData as inputsData } from './regOrgInputs';
import * as yup from "yup";
import { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import { useCreateOrganizationMutation } from '../../../entities/Organization/api/organizationApi';

const yupSchema = yup
    .object({
        firstName: yup.string().required('Required field'),
        lastName: yup.string().required('Required field'),
        phone: yup.string().required('Required field'),
        email: yup.string().email("Invalid email format").required('Required field'),
        name: yup.string().required('Required field'),
        employeesAmount: yup.number().typeError('Number required').required('Required field'),
        commercialReg: yup
          .number()
          .typeError('Number required')
          .required('Required field')
          .test(
            'is-ten-digits',
            'Number must be 10 digits',
            (value) => value.toString().length === 10
          ),
        commercialRegExpiryDate: yup.date().typeError("Invalid date format").required('Required field'),
        taxReg: yup
          .number()
          .typeError('Number required')
          .required('Required field')
          .test(
            'is-fifteen-digits',
            'Number must be 15 digits',
            (value) => value.toString().length === 15
          ),
        primaryBranch: yup.string().required('Required field'),
        branch: yup.string().required('Required field'),
        country: yup.string().required('Required field'),
        city: yup.string().required('Required field'),
        district: yup.string().required('Required field'),
        location: yup.string().required('Required field'),
        workplace: yup.string().required('Required field'),
    })
    .required();

type YupSchemaType = yup.InferType<typeof yupSchema>;

const RegisterOrg = () => {
  const navigate = useNavigate();
  const { contactInputs, branchInputs, orgInputs } = inputsData;
  const [createOrg] = useCreateOrganizationMutation();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } =
  useForm({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      name: '',
      employeesAmount: undefined,
      commercialReg: undefined,
      commercialRegExpiryDate: undefined,
      taxReg: undefined,
      primaryBranch: '',
      branch: '',
      country: '',
      city: '',
      district: '',
      location: '',
      workplace: '',
    },
  });

  const formatOrgData = (formData: any) => {
    const timestamp = new Date(formData.commercialRegExpiryDate).getTime() / 1000;

    const transformedData = {
      ...formData,
      commercialRegExpiryDate: timestamp,
      balance: 0,
      creditLimit: 0,
      employeesAmount: Number(formData.employeesAmount),
      primaryContact: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
      },
      branches: [formData.branch, formData.primaryBranch],
    };  
  
    return transformedData;
  };  

  const onSubmitHandler: SubmitHandler<YupSchemaType> = async () => {
    const orgInputs = getValues();
    const orgRegistered = formatOrgData(orgInputs);
    console.log(orgRegistered);
    try {
      await createOrg(orgRegistered);
      navigate('/organizations');
    } catch (e) {
      console.log(e);
    }
  }

  const onError: SubmitErrorHandler<any> = (value: any) => {
    console.log("Error", value)
  }

  return (
    <TemplateFormPage>
      <form className='register-org' onSubmit={handleSubmit(onSubmitHandler, onError)}>
        <div className="register-org-title">Register Organization</div>
        <div className="register-org-sections">
          <RegOrgSection 
            category="Contact" 
            inputEntries={contactInputs} 
            register={register as unknown as UseFormRegister<FieldValues>} 
            errors={errors} 
          />
          <RegOrgSection 
            category="Branch" 
            inputEntries={branchInputs} 
            register={register as unknown as UseFormRegister<FieldValues>} 
            errors={errors} 
          />
          <RegOrgSection 
            category="Organization" 
            inputEntries={orgInputs} 
            register={register as unknown as UseFormRegister<FieldValues>} 
            errors={errors} 
          />
        </div>
        <div className="register-org-button">
          <SectionButton label="Submit" type="submit" isFilled={true} />
        </div>
      </form>
    </TemplateFormPage>
  );
};

export default RegisterOrg;