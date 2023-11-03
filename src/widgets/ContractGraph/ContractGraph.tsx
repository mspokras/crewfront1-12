import React from 'react';
import ContractGraphCard from "../../entities/Contract/components/ContractGraph/ContractGraphCard";
import GraphFilters from "../../features/GraphFilters/GraphFilters";
import ContractDynamics from "../../entities/Contract/components/ContractDynamics/ContractDynamics";

const ContractGraph = () => {
    return (
        <div>
            <ContractGraphCard filter={<GraphFilters/>} right={<ContractDynamics/>}/>
        </div>
    );
};

export default ContractGraph;