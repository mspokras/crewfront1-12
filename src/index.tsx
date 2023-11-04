import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/global.scss';
import App from './app/ui/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);