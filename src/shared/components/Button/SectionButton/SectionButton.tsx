import React from 'react';
import './SectionButton.scss';

interface PropTypes {
  title: string
}

const SectionButton = (props: PropTypes) => {
  const { title } = props;
  return (
    <div className='section-button'>
      {title}
    </div>
  );
};

export default SectionButton;