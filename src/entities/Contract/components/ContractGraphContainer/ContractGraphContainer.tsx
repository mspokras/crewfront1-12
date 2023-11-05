import React from 'react';
import BlockTitle from "../../../../shared/components/Title/BlockTitle/BlockTitle";
import Graph from "../../../../shared/components/Charts/Graph/Graph";
import './ContractGraphContainer.scss';

interface ContractGraphProps {
    filter: React.ReactNode
    dynamics: React.ReactNode
}
const ContractGraphCard = (props: ContractGraphProps) => {
    const yData = [400, 180, 300, 250, 280, 460, 490, 600, 650, 805, 780, 950];
    const xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

            <Graph xData={xData} yData={yData} />
        </div>
    );
};

export default ContractGraphCard;