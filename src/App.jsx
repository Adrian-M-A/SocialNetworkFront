import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './containers/Main/Main.jsx';
import Register from './containers/Register/Register.jsx';

import './App.css';

import Landing from './containers/Landing/Landing.jsx';
import Friends from './containers/Friends/Friends.jsx';
import UserDetail from './containers/UserDetail/UserDetail.jsx';
import FriendDetail from './containers/FriendDetail/FriendDetail.jsx';
import ResetPassword from './containers/ResetPassword/ResetPassword.jsx';
import NewPassword from './containers/NewPassword/NewPassword.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}  />
          <Route exact path='/main' component={Main}  />
          <Route exact path='/register' component={Register}  />
          <Route exact path='/friends' component={Friends}  />
          <Route exact path='/userdetail' component={UserDetail}  />
          <Route exact path='/frienddetail' component={FriendDetail} />
          <Route exact path='/resetpassword' component={ResetPassword} />
          <Route exact path='/newpassword' component={NewPassword} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
