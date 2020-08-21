import React from 'react';
import Profile from '../../components/Profile/Profile.jsx';

import './Friends.css';

import UsersWindow from '../../components/UsersWindow/UsersWindow.jsx';


const Friends = props => {

    return (
        <div id="publicContainer">
            {localStorage.getItem('authToken') && <Profile />}
            {localStorage.getItem('authToken') && <UsersWindow />}
        </div>
    )
}

export default Friends;