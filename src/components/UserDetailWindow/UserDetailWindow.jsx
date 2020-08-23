import React from 'react';

import './UserDetailWindow.css';
import { useHistory } from 'react-router-dom';

const UserDetailWindow = props => {

    let history = useHistory();

    const getNewFriends = () => {
        history.push('/friends')
    }

    const goToMessages = () => {
        history.push('/main')
    }

    const goToUserDetail = () => {
        history.push('/userdetail')
    }
    return (
        <div id="userDetailWindow">
            <div id="headerUserDetail">
                <div id="headerUserDetailLeft">
                    <button id="userDetailButton" type="submit" onClick={getNewFriends}>Amigos</button>
                    <button id="buttonLastMessages" onClick={goToMessages}>Mensajes</button>
                    <button id="buttonUserDetail" onClick={goToUserDetail}>Perfil</button>
                </div>
            </div>    
        </div>
    )
}
export default UserDetailWindow;