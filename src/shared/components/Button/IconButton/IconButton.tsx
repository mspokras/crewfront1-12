import React from 'react';
import SectionButton from "../SectionButton/SectionButton";


interface PropTypes {
  icon?: string;
  label: string;
  onClick?: () => void;
}

const IconButton = (props: PropTypes) => {
  const { icon, label, onClick } = props;
  return (
      <SectionButton label={label} onClick={onClick}>
        <img src={icon} alt="icon" />
      </SectionButton>
  );
};

export default IconButton;