import React from 'react';
import GraphFilters from "../../features/GraphFilters/GraphFilters";
import CustomerGraphContainer from "../../entities/Customer/components/CustomerGraphContainer/CustomerGraphContainer";
import ViewReportButton from "../../features/ViewReportButton/ViewReportButton";

const CustomerGraph = () => {
    return (
        <div>
            <CustomerGraphContainer filter={<GraphFilters/>} right={<ViewReportButton/>}/>
        </div>
    );
};

export default CustomerGraph;