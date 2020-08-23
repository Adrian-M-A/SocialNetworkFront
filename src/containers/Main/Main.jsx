import React from 'react';
import Profile from '../../components/Profile/Profile.jsx';

import './Main.css';

import MessagesWindow from '../../components/MessagesWindow/MessagesWindow.jsx';


const Main = props => {

    return (
        <div id="publicContainer">
            {localStorage.getItem('authToken') && <Profile />}
            {localStorage.getItem('authToken') && <MessagesWindow />}
        </div>
    )
}

export default Main;