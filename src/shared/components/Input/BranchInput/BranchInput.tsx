import React from 'react';
import './BranchInput.scss';

interface PropTypes {
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const BranchInput = (props: PropTypes) => {
  const { label, placeholder, onChange, value } = props;
  return (
    <div className='branch-control'>
      <input 
        className="branch-input" 
        id="branch-input" 
        type="text"
        placeholder={placeholder}  
        onChange={onChange}
        value={value || ''}
      />
      <label className="branch-label" htmlFor="branch-input">{label}</label>
    </div>
  );
};

export default BranchInput;