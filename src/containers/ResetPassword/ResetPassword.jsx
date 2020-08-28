import React, { useState } from 'react';

import './ResetPassword.css';

import logo from '../../img/logo.jpg';
import { useHistory } from 'react-router-dom';
import { resetPassword } from '../../services/redux/actions';

const RegisterPassword = (props) => {
    
    let history = useHistory ();
    const [errorResetPassword, setErrorResetPassword] = useState('');

    const handleSubmit = event => {

        event.preventDefault();

        let body = {
            email: event.target.email.value
        };

        resetPassword(body)
        .then( () =>{
            history.push('/');
        })
        .catch(() => {
            setErrorResetPassword('Email no registrado.')
        })
        
    };

    return (
        <div id="resetPasswordContainer">
            <div id="logoResetPasswordTitle">
                <img id="logoResetPassword" src={logo} alt="red social"/>
                <div id="titleSubtitleResetPassword">
                    <h1 id="resetPasswordTitle">La red que siempre te acompaña.</h1>
                    <h3 id="resetPasswordSubtitle">La única red social que te conecta con los más queridos por todos.</h3>
                </div>
            </div>
            <div id="resetPasswordData">
                <form id="resetPasswordForm" onSubmit={handleSubmit}>
                    <label id="emailLabelResetPassword">Introduce tu email para recuperar la contraseña</label>
                    <input type="text" name="email" id="resetPasswordInput" placeholder="Introduce tu email" />
                    <button id="resetPasswordButton" type="submit">Enviar</button>
                    <span id="errorRegister">{errorResetPassword}</span>
                </form>
            </div>
            <div id="mapResetPassword"></div>
        </div>
    )
};

export default RegisterPassword;