import React from 'react';
import './RegOrgSection.scss';
import FormInput from '../../shared/components/Input/FormInput/FormInput';
import { UseFormRegister } from 'react-hook-form';

interface Input {
  label: string;
  name: string;
}

interface PropTypes {
  category: string;
  inputEntries: Input[];
  register: UseFormRegister<any>;
  errors?: any;
}

const RegOrgSection = (props: PropTypes) => {
  const { category, inputEntries, register, errors } = props;

  return (
    <div className='reg-org-section'>
      <div className="reg-org-category">{category}</div>
      {inputEntries.map((entry) => (
        <div className="reg-org-control" key={entry.name}>
          <FormInput 
            label={entry.label} 
            placeholder={`Enter ${entry.label.toLowerCase()}`} 
            {...register(entry.name)}
          />
          <div className="reg-org-error">{errors[entry.name]?.message}</div>
        </div>
      ))}
    </div>
  );
};

export default RegOrgSection;