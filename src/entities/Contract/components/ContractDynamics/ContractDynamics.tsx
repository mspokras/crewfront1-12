import React from 'react';
import Text from "../../../../shared/components/Text/Text";
import ChipsDynamics from "../../../../shared/components/Chips/ChipsDynamics";
import NumberLabel from '../../../../shared/components/Label/NumberLabel/NumberLabel';
import './ContractDynamics.scss';

const ContractDynamics = () => {
    return (
        <div className='contract-dynamics'>
            <Text>Contracts last 1 year</Text>
            <div className='contract-dynamics_numbers'>
                    <NumberLabel>2,000</NumberLabel>
                    <ChipsDynamics />   
            </div>
        </div>
    );
};

export default ContractDynamics;