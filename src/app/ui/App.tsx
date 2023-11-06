import React from 'react';
import './App.scss';
import Dashboard from "../../pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormContainer from '../../pages/Authorization/FormContainer/FormContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FormContainer />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;