import React from 'react';
import TemplatePage from "../TemplatePage/TemplatePage";
import ContractGraph from "../../widgets/ContractGraph/ContractGraph";
import CustomerGraph from "../../widgets/CustomerGraph/CustomerGraph";
import './Dashboard.scss';

const Dashboard = () => {
    return (
      <div className='dashboard'>
        <TemplatePage>
          <ContractGraph/>
          <CustomerGraph/>
        </TemplatePage>
      </div>
    );
};

export default Dashboard;