import React from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './components/App';
import Run from './components/Run';
import NotFound from './components/NotFound';

const Routes = props => (
  <Router {...props}>
    <div>
      <Switch>
        <Route exact path='/:dbPath?' component={App}/>
        <Route exact path='/experiment/:id' component={Run}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default hot(Routes);
