import React, { useState } from "react";
import axios from "axios";

import "./RegisterWindow.css";
import logo from '../../img/logo.jpg';
import API_URL from "../../config/api";
import { useHistory } from "react-router-dom";


const RegisterWindow = props => {

    let history = useHistory();

    const [errorName, setErrorName] = useState('');
    const [errorSurnames, setErrorSurnames] = useState('');
    const [errorAge, setErrorAge] = useState('');
    const [errorProfession, setErrorProfession] = useState('');
    const [errorHobbies, setErrorHobbies] = useState('');
    const [errorCity, setErrorCity] = useState('');
    const [errorCountry, setErrorCountry] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorPasswords, setErrorPasswords] = useState('');
    const [errorRegister, setErrorRegister] = useState('');
  
    const handleSubmit = event =>{
        event.preventDefault();

        setErrorName('');
        setErrorSurnames('');
        setErrorAge('');
        setErrorProfession('');
        setErrorHobbies('');
        setErrorCity('')
        setErrorCountry('');
        setErrorEmail('');
        setErrorPassword('');
        setErrorPasswords('')
        setErrorRegister('');
                
        
        let letterRegex = new RegExp('[0-9]');
        let ageRegex = new RegExp('[a-zA-Z]');
        let passwordRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
        
        //Error control
        if(event.target.name.value.length > 20 || event.target.name.value.length < 3 || letterRegex.test(event.target.name.value) || event.target.name.value === ""){
            setErrorName('Introduzca un nombre válido.');
            return;
        }
        if(event.target.surnames.value.length > 35 || event.target.surnames.value.length < 3 || letterRegex.test(event.target.surnames.value) || event.target.surnames.value === ""){
            setErrorSurnames('Introduzca unos apellidos válidos.');
            return;
        }
        if(event.target.age.value.length >= 3|| event.target.age.value === "" || event.target.age.value === "0" || ageRegex.test(event.target.age.value)){
            setErrorAge('Introduzca una edad correcta.');
            return;
        }
        if(event.target.profession.value.length > 35 || event.target.profession.value.length < 3 || letterRegex.test(event.target.profession.value) || event.target.profession.value === ""){
            setErrorProfession('Introduzca una profesión válida.');
            return;
        }
        if(event.target.hobbies.value.length > 35 || event.target.hobbies.value.length < 3 || letterRegex.test(event.target.hobbies.value) || event.target.hobbies.value === ""){
            setErrorHobbies('Introduzca unos hobby válidos.');
            return;
        }
        if(event.target.city.value.length > 35 || event.target.city.value.length < 3 || letterRegex.test(event.target.city.value) || event.target.city.value === ""){
            setErrorCity('Introduzca una ciudad válida.');
            return;
        }
        if(event.target.country.value.length > 35 || event.target.country.value.length < 3 || letterRegex.test(event.target.country.value) || event.target.country.value === ""){
            setErrorCountry('Introduzca un país válido.');
            return;
        }
        if(event.target.email.value === ""){
            setErrorEmail('El email introducido no es válido.');
            return;
        }
        if(!passwordRegex.test(event.target.password.value) || event.target.password.value === ""){
            setErrorPassword('La contraseña debe contener 1 mayús 1 minús 1 número 1 símbolo y tener 8 carácteres.');
            return;
        }
        if(event.target.password.value !== event.target.password2.value){
            setErrorPasswords('Los dos passwords deben coincidir.');
            return;
        }   
                
        let body = {
            name: event.target.name.value,
            surnames: event.target.surnames.value,
            age: event.target.age.value,
            profession: event.target.profession.value,
            hobbies: event.target.hobbies.value,
            city: event.target.city.value,
            country: event.target.country.value,
            email: event.target.email.value,
            password: event.target.password.value
        };

        axios.post(API_URL + "users/register", body)
        .then(res => {
            history.push('/');
        })
        .catch(error => {
            setErrorRegister('No ha sido posible registrarlo.');
        })
    };
    
    const landing = () =>{
        history.push('/');
    }

    return(
        <div id="registerContainer">
            <div id="registerWindow">
                <div id="registerHeader">
                    <div id="registerLogoImage">
                        <img id="logoHeader" src={logo} alt="logotipo de la red social" onClick={landing}/>
                    </div>
                    <h2 id="registerH2">Rellena el formulario con tus datos para acceder.</h2>
                </div> 
               
                <div id="registerFormInputs">
                    <form id="registerForm" onSubmit={handleSubmit}>
                        <div id="registerFormLeft">
                            <div id="nameSurnames">
                                <div id="nameContainer">
                                    <input type="text" name="name" id="nameInput" placeholder="Nombre"/>
                                    <span id="errorName">{errorName}</span>
                                </div>
                                <div id="surnamesContainer">
                                    <input type="text" name="surnames" id="surnamesInput" placeholder="Apellidos" />
                                    <span id="errorSurnames">{errorSurnames}</span>
                                </div>
                            </div>
                            <div id="ageProfession">
                                <div id="ageContainer">
                                    <input type="text" name="age" id="ageInput" placeholder="Edad actual" />
                                    <span id="errorAge">{errorAge}</span>
                                </div>
                                <div id="professionContainer">
                                    <input type="text" name="profession" id="professionInput" placeholder="Profesión" />
                                    <span id="errorProfession">{errorProfession}</span>
                                </div>
                            </div>
                            <div id="hobbiesContainer">
                                <input type="text" name="hobbies" id="hobbiesInput" placeholder="Hobby" />
                                <span id="errorHobbies">{errorHobbies}</span>
                            </div>
                            <div id="cityCountry">
                                <div id="cityContainer">
                                    <input type="text" name="city" id="cityInput" placeholder="Ciudad" />
                                    <span id="errorCity">{errorCity}</span>
                                </div>
                                <div id="countryContainer">
                                    <input type="text" name="country" id="countryInput" placeholder="País" />
                                    <span id="errorCountry">{errorCountry}</span>
                                </div>
                            </div>
                        </div>
                        <div id="registerFormRight">
                            <input type="email" name="email" id="emailInput" placeholder="Introduce tu email"/>
                            <span id="errorEmail">{errorEmail}</span>
                            <input type="password" name="password" id="password1Input" placeholder="Introduce tu contraseña" />
                            <span id="errorPassword">{errorPassword}</span>
                            <input type="password" name="password2" id="password2Input" placeholder="Repite tu contraseña" />
                            <span id="errorPasswords">{errorPasswords}</span>
                            <button id="registerButtonRW" type="submit">Registrar</button>
                            <span id="errorRegister">{errorRegister}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    )
}

export default RegisterWindow;