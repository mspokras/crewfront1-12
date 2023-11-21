import React from 'react';
import './SectionButton.scss';
import classNames from "classnames";

interface PropTypes {
  label: string;
  children?: React.ReactNode;
  isFilled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit'
}

const SectionButton = (props: PropTypes) => {
  const { label, children, isFilled, onClick, type } = props;
  return (
    <button
      className={classNames("section-button", { "filled": isFilled })}
      onClick={onClick}
      type={type}
    >
      {children}
      {label}
    </button>
  );
};

export default SectionButton;