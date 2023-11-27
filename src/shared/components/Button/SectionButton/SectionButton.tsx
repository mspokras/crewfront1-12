import React from 'react';
import './SectionButton.scss';
import classNames from "classnames";
import { Link } from 'react-router-dom';

interface PropTypes {
  label: string;
  className?: string;
  children?: React.ReactNode;
  isFilled?: boolean;
  onClick?: () => void;
  path?: string;
  type?: 'button' | 'submit'
}

const SectionButton = (props: PropTypes) => {
  const { label, className, children, isFilled, onClick, type, path } = props;
  
  const linkComponent = path ? (
    <Link to={path} className="section-button-link">
      {children}
      {label}
    </Link>
  ) : (
    <>
      {children}
      {label}
    </>
  );

  return (
    <button
      className={classNames("section-button", { "filled": isFilled }, className)}
      onClick={onClick}
      type={type}
    >
      {linkComponent}
    </button>
  );
};

export default SectionButton;