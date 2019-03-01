import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route} from 'react-router-dom';

import './index.css';
import App from './views/App';


ReactDOM.render(<Route><App /></Route>, document.getElementById('root'));

