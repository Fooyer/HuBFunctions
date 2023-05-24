// Import Styles

import './index.css';

// Import React Dependences

import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Page Component

import App from './App';

// Initialize React Page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);