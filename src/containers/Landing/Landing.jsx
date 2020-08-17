import React from 'react';
import Login from '../../components/login/Login.jsx';

import './Landing.css';

const Landing = (props) => {

    return (
        <div id="landingContainer">
            <h1 id="landingTitle">La red que siempre te acompaña.</h1>
            <h3 id="landingSubtitle">La única red social que te conecta con los más queridos por todos.</h3>
            <Login />
            <div id="mapLanding"></div>
        </div>
    )
}

export default Landing;