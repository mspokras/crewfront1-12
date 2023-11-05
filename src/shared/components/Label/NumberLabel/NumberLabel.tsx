import React from 'react';
import './NumberLabel.scss';

interface NumberLabelProps {
  number: string
}
const NumberLabel = (props: NumberLabelProps) => {
  const { number } = props;
  return (
    <div className='number-label'>
        {number}
    </div>
  );
};

export default NumberLabel;
