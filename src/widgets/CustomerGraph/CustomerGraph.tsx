import React from 'react';
import GraphFilters from "../../features/GraphFilters/GraphFilters";
import CustomerGraphContainer from "../../entities/Customer/components/CustomerGraphContainer/CustomerGraphContainer";
import ViewReportButton from "../../features/ViewReportButton/ViewReportButton";

const CustomerGraph = () => {
    const customerFilters = ['7 Days', '30 Days', '1 Year', 'All']
    return (
        <div className='customer-graph'>
            <CustomerGraphContainer filter={<GraphFilters filters={customerFilters} />} button={<ViewReportButton/>}/>
        </div>
    );
};

export default CustomerGraph;