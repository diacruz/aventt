import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import css from './public/css/bootstrap.min.css';
import style from './public/css/style.css';


import Landing from './components/Landing';
import Grid from './components/Grid';



ReactDOM.render(<BrowserRouter>
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/grid' component={Grid}/>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
