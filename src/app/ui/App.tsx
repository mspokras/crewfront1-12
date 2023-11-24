import React from 'react';
import './App.scss';
import Dashboard from "../../pages/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom";
import CustomerCare from '../../pages/CustomerCare/CustomerCare';
import OrgContainer from '../../pages/Organizations/OrgContainer';
import ContactsContainer from '../../pages/Contacts/ContactsContainer';
import OrdersContainer from '../../pages/Orders/OrdersContainer';
import LoginForm from '../../pages/Authorization/LoginForm/LoginForm';
import RegisterOrg from '../../pages/Organizations/RegisterOrg/RegisterOrg';

function App() {
    return (
      <Routes>
          <Route index element={<LoginForm/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/customer-care' element={<CustomerCare />} />
          <Route path='/organizations' element={<OrgContainer />} />
          <Route path='/contacts' element={<ContactsContainer />} />
          <Route path='/orders' element={<OrdersContainer />} />
          <Route path='/register-org' element={<RegisterOrg />} />
      </Routes>
    );
}

export default App;