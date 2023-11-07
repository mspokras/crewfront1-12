import React from 'react';
import SectionButton from "../SectionButton/SectionButton";


interface PropTypes {
  icon?: string;
  label: string
}

const IconButton = (props: PropTypes) => {
  const { icon, label } = props;
  return (
      <SectionButton label={label}>
        <img src={icon} alt="icon" />
      </SectionButton>
  );
};

export default IconButton;