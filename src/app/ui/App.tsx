import React from 'react';
import './App.scss';
import Dashboard from "../../pages/Dashboard/Dashboard";
import {Routes, Route} from "react-router-dom";
import FormContainer from '../../pages/Authorization/FormContainer/FormContainer';

function App() {
    return (
        <Routes>
            <Route index element={<FormContainer/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    );
}

export default App;