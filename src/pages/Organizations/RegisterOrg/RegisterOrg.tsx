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

const yupSchema = yup
    .object({
        contact_firstName: yup.string().required('Required field'),
        contact_lastName: yup.string().required('Required field'),
        contact_phone: yup.string().required('Required field'),
        contact_email: yup.string().email("Invalid email format").required('Required field'),
        branch_orgName: yup.string().required('Required field'),
        branch_regNumber: yup
          .number()
          .typeError('Number required')
          .required('Required field')
          .test(
            'is-ten-digits',
            'Number must be 10 digits',
            (value) => value.toString().length === 10
          ),
        branch_regDate: yup.string().required('Required field'),
        branch_taxNumber: yup
          .number()
          .typeError('Number required')
          .required('Required field')
          .test(
            'is-fifteen-digits',
            'Number must be 15 digits',
            (value) => value.toString().length === 15
          ),
        branch_city: yup.string().required('Required field'),
        branch_country: yup.string().required('Required field'),
        org_branchName: yup.string().required('Required field'),
        org_city: yup.string().required('Required field'),
        org_district: yup.string().required('Required field'),
        org_location: yup.string().required('Required field'),
        org_workplace: yup.string().required('Required field'),
    })
    .required();

type YupSchemaType = yup.InferType<typeof yupSchema>;

const RegisterOrg = () => {
  const navigate = useNavigate();
  const { contactInputs, branchInputs, orgInputs } = inputsData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } =
  useForm({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      contact_firstName: '',
      contact_lastName: '',
      contact_phone: '',
      contact_email: '',
      branch_orgName: '',
      branch_regNumber: undefined,
      branch_regDate: '',
      branch_taxNumber: undefined,
      branch_city: '',
      branch_country: '',
      org_city: '',
      org_district: '',
      org_location: '',
      org_workplace: '',
    },
  });

  const onSubmitHandler: SubmitHandler<YupSchemaType> = () => {
    navigate('/organizations');
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
          <SectionButton label="Submit" type="submit" isFilled={true} path="/organizations" />
        </div>
      </form>
    </TemplateFormPage>
  );
};

export default RegisterOrg;