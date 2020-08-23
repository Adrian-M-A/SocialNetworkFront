import React from 'react';
import Profile from '../../components/Profile/Profile.jsx';

import './Friends.css';

import RecFriendsWindow from '../../components/RecFriendsWindow/RecFriendsWindow.jsx';


const Friends = props => {

    return (
        <div id="publicContainer">
            {localStorage.getItem('authToken') && <Profile />}
            {localStorage.getItem('authToken') && <RecFriendsWindow />}
        </div>
    )
}

export default Friends;