import React from 'react';
import './SectionButton.scss';
import classNames from "classnames";

interface PropTypes {
  label: string
  children?: React.ReactNode
  isFilled?: boolean
}

const SectionButton = (props: PropTypes) => {
  const { label,children,isFilled } = props;
  return (
    <div className= {classNames("section-button",{
      "isFilled":isFilled
    })}>
      {children}
      {label}
    </div>
  );
};

export default SectionButton;