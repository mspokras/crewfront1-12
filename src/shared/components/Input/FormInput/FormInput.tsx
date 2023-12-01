import React from 'react';
import './FormInput.scss';

interface PropTypes {
  label?: string;
  placeholder?: string,
  id?: string;
  type?: string;
  value?: string;
  isDate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = React.forwardRef<HTMLInputElement,PropTypes>((props, ref) => {
  const { label, placeholder, id, type, value, onChange, isDate, ...rest } = props;
  const inputType = isDate ? "date" : (type || "text");

  return (
    <div className="form-control">
      <label className="form-label" htmlFor="form-input">{label}</label>
      <input 
        className="form-input" 
        ref={ref} 
        id={inputType} 
        type={inputType} 
        placeholder={placeholder}  
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  );
});

export default FormInput;