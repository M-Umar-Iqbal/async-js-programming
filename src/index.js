import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Callback from './Callback';
import reportWebVitals from './reportWebVitals';
import Promises from './promises';
import AsyncAwait from './AsyncAwait';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Promises />);
// root.render(<Callback />);
root.render(<AsyncAwait />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
