import React from 'react';
import UserWindow from '../../components/UserWindow/UserWindow.jsx';

import './Friends.css';

import RecFriendsWindow from '../../components/RecFriendsWindow/RecFriendsWindow.jsx';


const Friends = props => {

    return (
        <div id="publicContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <RecFriendsWindow />}
        </div>
    )
}

export default Friends;