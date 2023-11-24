import React from 'react';
import './FormInput.scss';
import InputMask from 'react-input-mask';

interface PropTypes {
  label?: string;
  placeholder?: string,
  id?: string;
  type?: string;
  value?: string;
  isMasked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = React.forwardRef<HTMLInputElement,PropTypes>((props, ref) => {
  const { label, placeholder, id, type, value, onChange, isMasked, ...rest } = props;

  if (isMasked) {
    return (
      <div className="form-control">
        <label className="form-label" htmlFor="form-input">{label}</label>
        <InputMask
          className="form-input"
          ref={ref}
          id={type || "form-input"}
          mask="99-99-9999"
          placeholder={placeholder}
          onChange={onChange}
          value={value || undefined}
          {...rest}
        />
      </div>
    );
  }

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
        value={value || undefined}
        {...rest}
      />
    </div>
  );
});

export default FormInput;