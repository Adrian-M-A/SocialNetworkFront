import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Public from './containers/Public/Public.jsx';
import Register from './containers/Register/Register.jsx';

import './App.css';

import Landing from './containers/Landing/Landing.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/public' component={Public} exact />
          <Route path='/register' component={Register} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
