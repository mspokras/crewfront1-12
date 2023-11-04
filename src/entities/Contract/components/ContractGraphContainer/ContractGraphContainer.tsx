import React from 'react';
import BlockTitle from "../../../../shared/components/Title/BlockTitle/BlockTitle";
import Graph from "../../../../shared/components/Charts/Graph/Graph";
import './ContractGraphContainer.scss';

interface ContractGraphProps {
    filter: React.ReactNode
    dynamics: React.ReactNode
}
const ContractGraphCard = (props: ContractGraphProps) => {
    const {filter, dynamics} = props
    return (
        <div className='contract-graph-container'>
            <div className='contract-header'>
                <div className='contract-left'>
                    <BlockTitle>Contracts</BlockTitle>
                    {filter}
                </div>
                {dynamics}
            </div>

            <Graph/>
        </div>
    );
};

export default ContractGraphCard;