import React, { useEffect } from 'react';
import Profile from '../../components/Profile/Profile.jsx';
// import { useHistory } from 'react-router-dom';

import './Main.css';

const Main = props => {
    
    // let history = useHistory();
    
    // useEffect(() =>{
        
    //     if(!localStorage.getItem('auhtToken')){    
    //         return history.push('/');
    //     }
       

    // },[]);

    return (
        <div id="publicContainer">
            <Profile />
            <div id="profile">

            </div>
        </div>
    )
}

export default Main;