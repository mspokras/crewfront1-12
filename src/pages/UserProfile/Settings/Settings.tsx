import React, { useEffect, useState } from 'react';
import './Settings.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import { adminsData } from './adminsData';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import EmailLink from '../../../shared/components/Link/EmailLink/EmailLink';
import BranchInput from '../../../shared/components/Input/BranchInput/BranchInput';
import { adminApi, useCreateAdminMutation, useDeleteAdminMutation, useGetAdminsQuery } from '../../../entities/Admin/api/adminApi';
import { logIn } from '../../../entities/Admin/admin.slice';
import { useAppDispatch } from '../../../store/store';
import { AdminTypes, IAdmin, saveToken } from '../../../entities/Admin/admin.models';

const Settings = () => {
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [newAdmin, setNewAdmin] = useState<IAdmin>({name: '', adminType: '', email: ''});
  const { data: adminsBackData } = useGetAdminsQuery();
  const [createAdmin] = useCreateAdminMutation();
  const [deleteAdmin] = useDeleteAdminMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (adminsBackData) {
      setAdmins(adminsBackData);
      console.log(adminsBackData);
    }
  }, [adminsBackData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewAdmin({ ...newAdmin, [field]: e.target.value });
  };

  const handleAddAdmin = async () => {
    if (newAdmin.name && newAdmin.adminType && newAdmin.email) {
      const { name, adminType, email } = newAdmin;
      try {
        const response = await createAdmin({
          name,
          adminType: AdminTypes[adminType as keyof typeof AdminTypes],
          email
        }).unwrap();
        saveToken(response.token);
        dispatch(logIn());
        dispatch(adminApi.util.resetApiState());
      } catch (e) {
        console.log(e);
      }
      setAdmins(prevAdmins => [...prevAdmins, newAdmin]);
      setNewAdmin({ name: '', adminType: '', email: '' });
    }
  };

  const handleDeleteAdmin = async (adminId: string) => {
    console.log(adminId);
    try {
      const deleted = await deleteAdmin(adminId).unwrap();
      if (deleted) {
        setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin._id !== adminId));
      } else {
        console.error('Failed to delete admin.');
      }
    } catch (e) {
      console.error('Error deleting admin:', e);
    } 
  }

  const handleEditAdminStatus = () => {}
  
  return (
    <TemplateFormPage>
      <div className='settings'>
        <div className="settings-title">Settings</div>
        <div className="settings-admins">
          <div className="settings-admins-title">Admins</div>
          {admins.map((admin: any)=>(
            <div className="settings-admin" key={admin.name}>
              <div className="settings-admin-name">{admin.name}</div>
              <div className="settings-admin-role">{admin.adminType}</div>
              <EmailLink email={admin.email} className="settings-admin-email" />
              <div className="settings-admin-btns">
                <SectionButton label="Edit status" />
                <SectionButton 
                  label="Remove admin" 
                  isFilled={true} 
                  className="btn-remove-admin" 
                  onClick={()=>handleDeleteAdmin(admin._id)}
                />
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
              onChange={(e) => handleInputChange(e, 'adminType')} 
              value={newAdmin.adminType} 
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