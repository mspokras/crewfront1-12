import React from 'react';
import './FormInput.scss';

interface PropTypes {
  label: string;
  placeholder?: string
}

const FormInput = (props: PropTypes) => {
  const { label, placeholder } = props;
  return (
    <div className="form-control">
      <label className="form-label" htmlFor="form-input">{label}</label>
      <input className="form-input" id="form-input" type="text" placeholder={placeholder} />
    </div>
  );
};

export default FormInput;