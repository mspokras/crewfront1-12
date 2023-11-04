import React from 'react';
import './NumberLabel.scss';

interface NumberLabelProps {
  children: React.ReactNode
}
const NumberLabel = (props: NumberLabelProps) => {
  const { children } = props;
  return (
    <div className='number-label'>
        {children}
    </div>
  );
};

export default NumberLabel;
