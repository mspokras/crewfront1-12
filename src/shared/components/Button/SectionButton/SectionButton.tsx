import React from 'react';
import './SectionButton.scss';

interface PropTypes {
  label: string
}

const SectionButton = (props: PropTypes) => {
  const { label } = props;
  return (
    <div className="section-button">
      {label}
    </div>
  );
};

export default SectionButton;