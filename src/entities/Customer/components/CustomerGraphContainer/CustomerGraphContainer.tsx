import React from 'react';
import BlockTitle from "../../../../shared/components/Title/BlockTitle/BlockTitle";
import Graph from "../../../../shared/components/Charts/Graph/Graph";
import './CustomerGraphContainer.scss';

interface CustomerGraphContainerProps {
    filter: React.ReactNode
    button: React.ReactNode
}
const CustomerGraphContainer = (props: CustomerGraphContainerProps) => {
    const { filter, button } = props
    return (
        <div className='customer-graph-container'>
            <div className='customer-header'>
                <div className='customer-left'>
                    <BlockTitle>Customer Satisfaction</BlockTitle>
                    {filter}
                </div>
                {button}
            </div>

            <Graph/>
        </div>
    );
};

export default CustomerGraphContainer;