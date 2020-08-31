import React from 'react';
import RegisterWindow from '../../components/RegisterWindow/RegisterWindow.jsx';

import './Register.css';

import logo from '../../img/logo.jpg';

const Register = (props) => {

    return (
        <div id="registerContainer">
            <div id="logoRegisterTitle">
                <img id="logoRegister" src={logo} alt="red social"/>
                <div id="titleSubtitleRegister">
                    <h1 id="registerTitle">La red que siempre te acompaña.</h1>
                    <h3 id="registerSubtitle">La única red social que te conecta con los más queridos por todos.</h3>
                </div>
            </div>
            <div id="registerMap">
                <RegisterWindow />
            </div>
        </div>
    )
}

export default Register;