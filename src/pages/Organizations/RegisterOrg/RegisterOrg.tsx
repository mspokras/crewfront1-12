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
        org_orgName: yup.string().required('Required field'),
        org_regNumber: yup
          .number()
          .typeError('Number required')
          .required('Required field')
          .test(
            'is-ten-digits',
            'Number must be 10 digits',
            (value) => value.toString().length === 10
          ),
        org_regDate: yup.string().required('Required field'),
        org_taxNumber: yup
          .number()
          .typeError('Number required')
          .required('Required field')
          .test(
            'is-fifteen-digits',
            'Number must be 15 digits',
            (value) => value.toString().length === 15
          ),
        org_primaryBranch: yup.string().required('Required field'),
        branch_branchName: yup.string().required('Required field'),
        branch_country: yup.string().required('Required field'),
        branch_city: yup.string().required('Required field'),
        branch_district: yup.string().required('Required field'),
        branch_location: yup.string().required('Required field'),
        branch_workplace: yup.string().required('Required field'),
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
      org_orgName: '',
      org_regNumber: undefined,
      org_regDate: '',
      org_taxNumber: undefined,
      org_primaryBranch: '',
      branch_branchName: '',
      branch_country: '',
      branch_city: '',
      branch_district: '',
      branch_location: '',
      branch_workplace: '',
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