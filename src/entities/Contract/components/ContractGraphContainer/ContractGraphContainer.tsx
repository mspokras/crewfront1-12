import React from 'react';
import BlockTitle from "../../../../shared/components/Title/BlockTitle/BlockTitle";
import Graph from "../../../../shared/components/Charts/Graph/Graph";
import './ContractGraphContainer.scss';

interface ContractGraphProps {
    filter: React.ReactNode
    right: React.ReactNode
}
const ContractGraphCard = (props: ContractGraphProps) => {
    const {filter, right} = props
    return (
        <div>
            <div>
                <div>
                    <BlockTitle>Contracts</BlockTitle>
                    {filter}
                </div>
                {right}
            </div>

            <Graph/>
        </div>
    );
};

export default ContractGraphCard;