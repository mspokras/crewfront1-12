import React, { ReactNode } from 'react';
import './IconButton.scss';

interface PropTypes {
  icon: string | undefined;
  label: string
}

const IconButton = (props: PropTypes) => {
  const { icon, label } = props;
  return (
    <div className='icon-button'>
      <img src={icon} alt="icon" />
      {label}
    </div>
  );
};

export default IconButton;