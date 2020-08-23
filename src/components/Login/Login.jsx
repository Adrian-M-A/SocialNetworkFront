import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { login } from "../../services/redux/actions.js";
import "./Login.css";

const Login = (props) => {
    const [errorLogin, setErrorLogin] = useState('')
    let history = useHistory();
    const onSubmit = (event) => {
        event.preventDefault();
        const credentials = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        login(credentials)
        .then(() => {
            history.push('/public');
        }, 200)

        .catch(() => {
            setErrorLogin('Usuario no registrado.')
        })
    }
    const register = () => {
        const timer = setTimeout(() => {
            history.push('/register');
        }, 200);
        return () => clearTimeout(timer);
    };

    return (
        <div id="loginContainer">
            <div id="loginInputs">
                <div id="loginData">
                    <form id="loginForm" onSubmit={onSubmit}>
                            <label id="emailLabel">Email</label>
                            <input type="email" name="email" id="loginEmailInput" autoFocus placeholder="Introduce tu email"/>
                            <label id="passwordLabel">Password</label>
                            <input type="password" name="password" id="loginPasswordInput" placeholder="Introduce tu contraseña" />
                            <button id="loginButton" type="submit">Entrar</button>
                    </form>    
                    <button id="registerButton" onClick={register}>Registrarse</button>
                </div>
                <span id="errorLogin">{errorLogin}</span>
            </div>
        </div>
    )
}

export default Login;