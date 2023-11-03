import React from 'react';
import Title from "../../../../shared/components/Title/Title/Title";
import Graph from "../../../../shared/components/Charts/Graph/Graph";

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
                    <Title/>
                    {filter}
                </div>
                {right}
            </div>

            <Graph/>
        </div>
    );
};

export default ContractGraphCard;