import React, { useState } from 'react';

import './NewPassword.css';

import logo from '../../img/logo.jpg'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config/api';

const NewPassword = (props) => {
    
    let history = useHistory ();

    const [errorPassword, setErrorPassword] = useState('');
    const [errorPasswords, setErrorPasswords] = useState('');
    const [errorNewPassword, setErrornewPassword] = useState('');

    const handleSubmit = event => {

        event.preventDefault();

        setErrorPassword('');
        setErrorPasswords('');
        setErrornewPassword('');

        let passwordRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

        if(!passwordRegex.test(event.target.password.value) || event.target.password.value === ""){
            setErrorPassword('La contraseña debe contener 1 mayús 1 minús 1 número 1 símbolo y tener 8 carácteres.');
            return;
        }
        if(event.target.password.value !== event.target.password2.value){
            setErrorPasswords('Los dos passwords deben coincidir.');
            return;
        }   
            
        let body = {
            password: event.target.password.value
        };

        axios.post(API_URL + "users/newPassword", body)
        .then(res => {
            history.push('/');
        })
        .catch(error => {
            setErrornewPassword('No ha sido posible registrarlo.');
        })
    };

    return (
        <div id="newPasswordContainer">
            <div id="logoNewPasswordTitle">
                <img id="logoNewPassword" src={logo} alt="red social" />
                <div id="titleSubtitleNewPassword">
                    <h1 id="newPasswordTitle">La red que siempre te acompaña.</h1>
                    <h3 id="newPasswordSubtitle">La única red social que te conecta con los más queridos por todos.</h3>
                </div>
            </div>
            <div id="newPasswordData">
                <form id="newPasswordForm" onSubmit={handleSubmit}>
                    <div id="passwordAndError">
                        <input type="password" name="password" id="newPassword1Input" placeholder="Introduce tu nueva contraseña" />
                        <div id="errorNewPassword">{errorPassword}</div>
                    </div>
                    <div id="passwordAndError2">
                        <input type="password" name="password2" id="newPassword2Input" placeholder="Repite tu nueva contraseña" />
                        <span id="errorNewPasswords">{errorPasswords}</span>
                    </div>
                    <button id="newPasswordButton" type="submit">Enviar</button>
                    <span id="errorNewPassword">{errorNewPassword}</span>
                </form>
            </div>    
            <div id="mapNewPassword"></div>
        </div>
    )
};

export default NewPassword;