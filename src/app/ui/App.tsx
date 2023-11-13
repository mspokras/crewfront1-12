import React from 'react';
import './App.scss';
import Dashboard from "../../pages/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom";
import FormContainer from '../../pages/Authorization/FormContainer/FormContainer';
import CustomerCare from '../../pages/CustomerCare/CustomerCare';
import OrgContainer from '../../pages/Organisations/OrgContainer';
import ContactsContainer from '../../pages/Contacts/ContactsContainer';
import OrdersContainer from '../../pages/Orders/OrdersContainer';

function App() {
    return (
      <Routes>
          <Route index element={<FormContainer/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/customer-care' element={<CustomerCare />} />
          <Route path='/organisations' element={<OrgContainer />} />
          <Route path='/contacts' element={<ContactsContainer />} />
          <Route path='/orders' element={<OrdersContainer />} />
      </Routes>
    );
}

export default App;