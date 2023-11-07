import React from 'react';
import Text from "../../../../shared/components/Text/Text";
import ChipsDynamics from "../../../../shared/components/Chips/ChipsDynamics";
import NumberLabel from '../../../../shared/components/Label/NumberLabel/NumberLabel';
import './ContractDynamics.scss';

const ContractDynamics = () => {
    return (
        <div className='contract-dynamics'>
            <Text label="Contracts last 1 year" />
            <div className='contract-dynamics_numbers'>
                    <NumberLabel number="2,000" />
                    <ChipsDynamics />   
            </div>
        </div>
    );
};

export default ContractDynamics;