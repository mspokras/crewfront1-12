import React, { ChangeEvent } from 'react';
import './FormInput.scss';

interface PropTypes {
  label: string;
  placeholder?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: PropTypes) => {
  const { label, placeholder, onChange } = props;
  return (
    <div className="form-control">
      <label className="form-label" htmlFor="form-input">{label}</label>
      <input className="form-input" id="form-input" type="text" onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;