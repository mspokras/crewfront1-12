import React from 'react';
import './SectionButton.scss';
import classNames from "classnames";

interface PropTypes {
  label: string;
  children?: React.ReactNode;
  isFilled?: boolean;
  onClick?: () => void;
}

const SectionButton = (props: PropTypes) => {
  const { label, children, isFilled, onClick } = props;
  return (
    <div 
      className={ classNames("section-button",{ "isFilled":isFilled })}
      onClick={onClick}
    >
      {children}
      {label}
    </div>
  );
};

export default SectionButton;