import React from 'react';

import './UserDetail.css';

import UserWindow from '../../components/UserWindow/UserWindow';
import UserDetailWindow from '../../components/UserDetailWindow/UserDetailWindow';

const UserDetail = props => {
    return (
        <div id="userDetailContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <UserDetailWindow />}
        </div>
    )
}
export default UserDetail;