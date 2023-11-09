import React from 'react';
import './FormInput.scss';

interface PropTypes {
  label: string;
  placeholder?: string,
}

const FormInput = React.forwardRef<HTMLInputElement,PropTypes>((props, ref) => {
  const { label, placeholder, ...rest } = props;
  return (
    <div className="form-control">
      <label className="form-label" htmlFor="form-input">{label}</label>
      <input className="form-input" ref={ref} id="form-input" type="text"  placeholder={placeholder}  {...rest}/>
    </div>
  );
});

export default FormInput;