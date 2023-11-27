import React, { useState } from 'react';
import './OrgScreen.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';
import { ordersData, transData } from './orgScreenData';
import BranchInput from '../../../shared/components/Input/BranchInput/BranchInput';

const orgBranches = ['Kyiv', 'Odessa', 'Warsaw', 'San Francisco'];

const OrgScreen = () => {
  const [branches, setBranches] = useState(orgBranches);
  const [newBranch, setNewBranch] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBranch(e.target.value);
  };

  const handleAddBranch = () => {
    if (newBranch) {
      setBranches(prevBranches => [...prevBranches, newBranch]);
      setNewBranch('');
    }
  }

  return (
    <TemplateFormPage>
      <div className='org-screen'>
        <div className="org-screen-header">
          <div className="org-header-name">McDonald's</div>
          <SectionButton label="+ Add order" isFilled={true} />
        </div>
        <div className="org-screen-body">
          <div className="org-key-data">
            <div className="org-balance">
              <div className="org-balance-label">Balance</div>
              <div className="org-balance-sum">$100.000</div>
            </div>
            <div className="org-branches">
              <div className="org-branches-label">Branches</div>
              {branches.map((branchName, index)=> (
                <div className="org-branch" key={index}>· {branchName}</div>
              ))}
              <BranchInput 
                placeholder="Enter the branch name" 
                onChange={(e) => handleInputChange(e)} 
                value={newBranch} 
              />
              <SectionButton label="+ Add branch" onClick={handleAddBranch} />
            </div>
          </div>
          <div className="ord-history">
            <div className="ord-history-title">Orders history</div>
            <div className="order-items">
              {ordersData.map((item)=>(
                <div className="order-item" key={item.number}>
                  <div className="order-item-data">
                    <div className="order-item-number">{item.number}</div>
                    <div className="order-item-date">{item.date}</div>
                    <div className="order-item-sum">{item.sum}</div>
                  </div>
                  <SectionButton label="More details ->" />
                </div>
              ))}
            </div>
          </div>
          <div className="trans-history">
            <div className="trans-history-title">Transaction history</div>
            <div className="trans-items">
              {transData.map((item)=>(
                <div className="trans-item" key={item.number}>
                  <div className="trans-item-data">
                    <div className="trans-item-number">{item.number}</div>
                    <div className="trans-item-date">{item.date}</div>
                    <div className="trans-item-sum">{item.sum}</div>
                  </div>
                  <SectionButton label="More details ->" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="org-screen-footer">
          <SectionButton label="Record payment" />
          <SectionButton label="Change credit line" />
        </div>
      </div>
    </TemplateFormPage>
  );
};

export default OrgScreen;