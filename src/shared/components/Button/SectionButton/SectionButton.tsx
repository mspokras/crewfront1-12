import React from 'react';
import './SectionButton.scss';
import classNames from "classnames";
import { Link } from 'react-router-dom';

interface PropTypes {
  label: string;
  children?: React.ReactNode;
  isFilled?: boolean;
  onClick?: () => void;
  path?: string;
  type?: 'button' | 'submit'
}

const SectionButton = (props: PropTypes) => {
  const { label, children, isFilled, onClick, type, path } = props;
  
  const linkComponent = path ? (
    <Link to={path} className="section-button-link">
      {children}
      {label}
    </Link>
  ) : (
    <span>
      {children}
      {label}
    </span>
  );

  return (
    <button
      className={classNames("section-button", { "filled": isFilled })}
      onClick={onClick}
      type={type}
    >
      {linkComponent}
    </button>
  );
};

export default SectionButton;