import React from 'react';
import './NumberLabel.scss';

interface NumberLabelProps {
  number: number
}
const NumberLabel = (props: NumberLabelProps) => {
  const { number } = props;
  return (
    <div className='number-label'>
        {number.toLocaleString()}
    </div>
  );
};

export default NumberLabel;
