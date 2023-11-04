import React from 'react';
import BlockTitle from "../../../../shared/components/Title/BlockTitle/BlockTitle";
import Graph from "../../../../shared/components/Charts/Graph/Graph";

interface CustomerGraphContainerProps {
    filter: React.ReactNode
    right: React.ReactNode
}
const CustomerGraphContainer = (props: CustomerGraphContainerProps) => {
    const { filter, right } = props
    return (
        <div>
            <div>
                <div>
                    <BlockTitle>Customer Satisfaction</BlockTitle>
                    {filter}
                </div>
                {right}
            </div>

            <Graph/>
        </div>
    );
};

export default CustomerGraphContainer;