import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './containers/Main/Main.jsx';
import Register from './containers/Register/Register.jsx';

import './App.css';

import Landing from './containers/Landing/Landing.jsx';
import Friends from './containers/Friends/Friends.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/public' component={Main} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/friends' component={Friends} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
