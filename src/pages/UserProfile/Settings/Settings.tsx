import React, { useState } from 'react';
import './Settings.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import { adminsData } from './adminsData';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import BranchInput from '../../../shared/components/Input/BranchInput/BranchInput';

const Settings = () => {
  const [admins, setAdmins] = useState(adminsData);
  const [newAdmin, setNewAdmin] = useState({ name: '', status: '', email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewAdmin({ ...newAdmin, [field]: e.target.value });
  };

  const handleAddAdmin = () => {
    if (newAdmin.name && newAdmin.status && newAdmin.email) {
      setAdmins(prevAdmins => [...prevAdmins, newAdmin]);
      setNewAdmin({ name: '', status: '', email: '' });
    }
  };
  
  return (
    <TemplateFormPage>
      <div className='settings'>
        <div className="settings-title">Settings</div>
        <div className="settings-admins">
          <div className="settings-admins-title">Admins</div>
          {admins.map((admin)=>(
            <div className="settings-admin">
              <div className="settings-admin-name">{admin.name}</div>
              <div className="settings-admin-role">{admin.status}</div>
              <EmailLink email={admin.email} className="settings-admin-email" />
              <div className="settings-admin-btns">
                <SectionButton label="Edit status" />
                <SectionButton label="Remove admin" isFilled={true} className="btn-remove-admin" />
              </div>
            </div>
          ))}
          <div className="settings-new-admin">
            <BranchInput 
              placeholder="Admin name" 
              onChange={(e) => handleInputChange(e, 'name')} 
              value={newAdmin.name} 
            />
            <BranchInput 
              placeholder="Status" 
              onChange={(e) => handleInputChange(e, 'status')} 
              value={newAdmin.status} 
            />
            <BranchInput 
              placeholder="Email" 
              onChange={(e) => handleInputChange(e, 'email')} 
              value={newAdmin.email} 
            />
          </div>
          <SectionButton label="+ Add new admin" isFilled={true} onClick={handleAddAdmin}/>
        </div>
      </div>
    </TemplateFormPage>
  );
};

export default Settings;