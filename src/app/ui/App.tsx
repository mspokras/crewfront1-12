import React from 'react';
import './App.scss';
import Dashboard from "../../pages/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom";
import FormContainer from '../../pages/Authorization/FormContainer/FormContainer';
import CustomerCare from '../../pages/CustomerCare/CustomerCare';

function App() {
    return (
      <Routes>
          <Route index element={<FormContainer/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/customer-care' element={<CustomerCare />} />
      </Routes>
    );
}

export default App;