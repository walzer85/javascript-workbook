import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BandForm from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BandForm />, document.getElementById('root'));
registerServiceWorker();
