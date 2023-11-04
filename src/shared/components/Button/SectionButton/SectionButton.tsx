import React from 'react';
import './SectionButton.scss';

interface propTypes {
  children: React.ReactNode
}

const SectionButton = (props: propTypes) => {
  const { children } = props;
  return (
    <div className='section-button'>
      {children}
    </div>
  );
};

export default SectionButton;