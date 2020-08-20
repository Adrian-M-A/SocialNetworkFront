import React from 'react';
import Profile from '../../components/Profile/Profile.jsx';
import MessagesWindow from '../../components/MessagesWindow/MessagesWindow.jsx';
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';

import './Main.css';



const Main = props => {


    // useEffect(() =>{
    //     if(!localStorage.getItem('auhtToken')){    
            
    //     }
    //     console.log("montado")
    // },[])

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