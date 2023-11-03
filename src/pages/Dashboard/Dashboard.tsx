import React from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import ContractGraph from "../../widgets/ContractGraph/ContractGraph";
import CustomerGraph from "../../widgets/CustomerGraph/CustomerGraph";

const Dashboard = () => {
    return (
        <TemplatePage>
          <ContractGraph/>
          <CustomerGraph/>
        </TemplatePage>
    );
};

export default Dashboard;