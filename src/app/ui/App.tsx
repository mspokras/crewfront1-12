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
import ContactBranch from '../../pages/Contacts/ContactBranch/ContactBranch';
import OrgScreen from '../../pages/Organizations/OrgScreen/OrgScreen';

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
          <Route path='/contact-branch' element={<ContactBranch />} />
          <Route path='/org-screen' element={<OrgScreen />} />
      </Routes>
    );
}

export default App;