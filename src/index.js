import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/style.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
, document.getElementById('root'));

