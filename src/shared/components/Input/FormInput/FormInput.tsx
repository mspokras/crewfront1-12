import React from 'react';
import './FormInput.scss';

interface PropTypes {
  label?: string;
  placeholder?: string,
  id?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = React.forwardRef<HTMLInputElement,PropTypes>((props, ref) => {
  const { label, placeholder, id, type, value, onChange, ...rest } = props;
  return (
    <div className="form-control">
      <label className="form-label" htmlFor="form-input">{label}</label>
      <input 
        className="form-input" 
        ref={ref} 
        id={type || "form-input"} 
        type={type || "text"} 
        placeholder={placeholder}  
        onChange={onChange}
        value={value || ''}
        {...rest}
      />
    </div>
  );
});

export default FormInput;