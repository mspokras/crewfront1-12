import React, { useState } from 'react';
import './OrgBalance.scss';
import TemplateFormPage from '../../TemplateFormPage/TemplateFormPage';
import { invoiceData, transData } from './orgBalanceData';
import SectionButton from '../../../shared/components/Button/SectionButton/SectionButton';

const OrgBalance = () => {
  const [activeTab, setActiveTab] = useState('invoices'); 

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TemplateFormPage>
      <div className='org-balance-page'>
        <div className="org-balance-header">
          <div className="org-name">McDonald's</div>
          <div className="org-balance">Balance: 5000$</div>
        </div>
        <div className="org-balance-tabs">
          <button
            className={`org-balance-tab ${activeTab === 'invoices' ? 'active' : ''}`}
            onClick={() => handleTabClick('invoices')}
          >
            Invoices
          </button>
          <button
            className={`org-balance-tab ${activeTab === 'payments' ? 'active' : ''}`}
            onClick={() => handleTabClick('payments')}
          >
            Other payments
          </button>
          <button
            className={`org-balance-tab ${activeTab === 'credit-line' ? 'active' : ''}`}
            onClick={() => handleTabClick('credit-line')}
          >
            Credit line
          </button>
        </div>
        <div className="org-balance-content">
          {activeTab === 'invoices' 
            && 
          <div className='org-content-invoices'>
            <div className="org-trans-history">
              <div className="trans-history-title">Invoice history</div>
              <div className="trans-items">
                {invoiceData.map((item)=>(
                  <div className="trans-item" key={item.number}>
                    <div className="trans-item-data">
                      <div className="trans-item-details">
                        <div className="trans-item-number">
                          {activeTab === 'invoices' ? 'Invoice' : 'Wire transfer'} {item.number}
                        </div>
                        <div className="trans-item-date">{item.date}</div>
                      </div>
                      <div className="trans-item-sum">{item.sum}</div>
                    </div>
                    <SectionButton label="More details ->" />
                  </div>
                ))}
              </div>
            </div>
            <div className="org-receipt">
              Receipt here
            </div>
          </div>}
          {activeTab === 'payments' 
            && 
          <div className='org-content-payments'>
            <div className="org-trans-history">
              <div className="trans-history-title">Transaction history</div>
              <div className="trans-items">
                {transData.map((item)=>(
                  <div className="trans-item" key={item.number}>
                    <div className="trans-item-data">
                      <div className="trans-item-details">
                        <div className="trans-item-number">
                          {activeTab === 'payments' ? 'Wire transfer' : 'Invoice'} {item.number}
                        </div>
                        <div className="trans-item-date">{item.date}</div>
                      </div>
                      <div className="trans-item-sum">{item.sum}</div>
                    </div>
                    <SectionButton label="More details ->" />
                  </div>
                ))}
                <SectionButton label="+ Add transaction" />
              </div>
            </div>
            <div className="org-receipt">
              Receipt here
            </div>
          </div>}
          {activeTab === 'credit-line' 
            && 
          <div className='org-content-credit'>
            <div className="org-credit-line">Credit line: <b>$10000</b></div>
          </div>}
        </div>
      </div>
    </TemplateFormPage>
  );
};

export default OrgBalance;