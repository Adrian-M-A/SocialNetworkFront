import React, { useEffect } from 'react';
import Profile from '../../components/Profile/Profile.jsx';
import MessagesWindow from '../../components/MessagesWindow/MessagesWindow.jsx';
import { useHistory } from 'react-router-dom';

import './Main.css';



const Main = props => {

    // let history = useHistory();

    // if(localStorage.getItem('auhtToken') == null){    
    //         return (history.push('/'));
    //     }
    

    return (
        <div id="publicContainer">
            <Profile />
            <MessagesWindow />
            <div id="profile">

            </div>
        </div>
    )
}

export default Main;