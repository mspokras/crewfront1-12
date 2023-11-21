import React from 'react';
import './FormWrapper.scss';
import PageTitle from '../../../shared/components/Title/PageTitle/PageTitle';
import LoginBottomLink from '../../../shared/components/Link/LoginBottomLink/LoginBottomLink';
import PageLogo from '../../../shared/components/PageLogo/PageLogo';
import bigLogo from '../../../assets/icons/logo-big.svg';

interface PropTypes {
  pageTitle: string;
  page: "login" | "signup";
  children: React.ReactNode;
}
const FormWrapper = (props: PropTypes) => {
  const { pageTitle, page, children } = props;
  return (
    <div className='form-container'> 
      <div className='form-left'>
        <PageLogo />
        <div className='form-wrapper'>
          <div className="form-content">
            <PageTitle title={pageTitle} />
              {children}
            <LoginBottomLink page={page} />
          </div>
        </div>
      </div>
      <div className='form-right'>
        <img src={bigLogo} alt="crew-logo" />
      </div>
    </div>
  );
};

export default FormWrapper;