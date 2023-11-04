import React from 'react';
import ContractGraphContainer from "../../entities/Contract/components/ContractGraphContainer/ContractGraphContainer";
import GraphFilters from "../../features/GraphFilters/GraphFilters";
import ContractDynamics from "../../entities/Contract/components/ContractDynamics/ContractDynamics";

const ContractGraph = () => {
    const contractFilters = ['7 Days', '30 Days', '90 Days', '1 Year', 'YTD']
    return (
        <div className='contract-graph'>
            <ContractGraphContainer filter={<GraphFilters filters={contractFilters} />} dynamics={<ContractDynamics/>}/>
        </div>
    );
};

export default ContractGraph;