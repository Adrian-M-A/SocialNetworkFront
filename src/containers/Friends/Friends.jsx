import React from 'react';
import UserWindow from '../../components/UserWindow/UserWindow.jsx';

import './Friends.css';

import RecFriendsWindow from '../../components/RecFriendsWindow/RecFriendsWindow.jsx';
import ChatWindow from '../../components/ChatWindow/ChatWindow.jsx';


const Friends = props => {

    return (
        <div id="publicContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <RecFriendsWindow />}
            {localStorage.getItem('authToken') && <ChatWindow />}
        </div>
    )
}

export default Friends;