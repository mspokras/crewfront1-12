import React from 'react';
import ContractGraphContainer from "../../entities/Contract/components/ContractGraphContainer/ContractGraphContainer";
import GraphFilters from "../../features/GraphFilters/GraphFilters";
import ContractDynamics from "../../entities/Contract/components/ContractDynamics/ContractDynamics";

const ContractGraph = () => {
    return (
        <div>
            <ContractGraphContainer filter={<GraphFilters/>} right={<ContractDynamics/>}/>
        </div>
    );
};

export default ContractGraph;