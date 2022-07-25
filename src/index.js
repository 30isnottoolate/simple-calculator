import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';

const container = ReactDOM.createRoot(document.getElementById('app-container'));
container.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
