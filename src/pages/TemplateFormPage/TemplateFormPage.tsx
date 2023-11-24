import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowBack from '../../assets/icons/arrow-back.svg';
import './TemplateFormPage.scss';

interface PropTypes {
  children: React.ReactNode;
}
const TemplateFormPage = (props: PropTypes) => {
  const { children } = props;

  const navigate = useNavigate();
  return (
    <div className='template-form-page'>
      <button className='template-form-button' onClick={() => navigate(-1)}>
        <img src={arrowBack} alt="arrow" />
        Back
      </button>
      {children}
    </div>
  );
};

export default TemplateFormPage;