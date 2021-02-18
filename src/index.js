import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/header/navbar.jsx';
import ListProducts from './components/body/list_products.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<ListProducts />, document.getElementById('list_products'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
