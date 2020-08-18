import React from 'react';
import Login from '../../components/Login/Login.jsx';

import './Landing.css';
import logo from '../../img/logo.jpg';

const Landing = (props) => {

    return (
        <div id="landingContainer">
            <div id="logoTitle">
                <img id="logoLanding" src={logo} alt="red social"/>
                <div id="titleSubtitle">
                    <h1 id="landingTitle">La red que siempre te acompaña.</h1>
                    <h3 id="landingSubtitle">La única red social que te conecta con los más queridos por todos.</h3>
                </div>
            </div>
            <Login />
            <div id="mapLanding"></div>
        </div>
    )
}

export default Landing;