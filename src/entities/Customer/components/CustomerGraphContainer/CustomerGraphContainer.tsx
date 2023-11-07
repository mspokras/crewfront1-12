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
    const yData = [200, 180, 300, 250, 280, 460, 490, 600, 650, 805, 780, 950];
    const xData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
        <section className='customer-graph-container'>
            <div className='customer-header'>
                <div className='customer-left'>
                    <BlockTitle>Customer Satisfaction</BlockTitle>
                    {filter}
                </div>
                {button}
            </div>

            <Graph xData={xData} yData={yData} leftAxis={null} />
        </section>
    );
};

export default CustomerGraphContainer;