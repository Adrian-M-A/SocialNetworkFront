import React from 'react';
import UserWindow from '../../components/UserWindow/UserWindow.jsx';

import './Main.css';

import MessagesWindow from '../../components/MessagesWindow/MessagesWindow.jsx';
import ChatWindow from '../../components/ChatWindow/ChatWindow.jsx';


const Main = props => {

    return (
        <div id="publicContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <MessagesWindow />}
            {localStorage.getItem('authToken') && <ChatWindow />}
        </div>
    )
}

export default Main;