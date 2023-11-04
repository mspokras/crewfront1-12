import React from 'react';
import arrowUp from '../../../assets/icons/chip-arrow-up.svg';
import './ChipsDynamics.scss'

const ChipsDynamics = () => {
    return (
        <div className='chips-dynamics'>
            <div className='arrow-up'>
                <img src={arrowUp} alt="arrow-up" />
            </div>
            <div className='chips-percentage'>
                100%
            </div>
        </div>
    );
};

export default ChipsDynamics;