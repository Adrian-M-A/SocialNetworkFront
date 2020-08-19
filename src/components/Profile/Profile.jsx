import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import API_URL from "../../config/api";
import { useHistory } from 'react-router-dom';

import './Profile.css';

const Profile = props =>{
    
    let history = useHistory();

    const logout = () => {
        
        const token = localStorage.getItem('authToken');
        const headers = {
            token
        }

        axios.get(API_URL + 'users/logout', {
            headers : headers
        })
        .then(res => {
            localStorage.removeItem('authToken');
            history.push('/');
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        
        <div id="profileWindow">
            <div id="userInfo">
                <div id="userImg">
                    <div id="imageBorder">
                        <img id="profileImg" src={props.user?.imagesPath[0]} alt="Perfil"/>
                    </div>
                </div>
                <div id="userData">
                    <div id="salutationProfile"> Bienvenido/a {props.user?.name} {props.user?.surnames}  </div>
                    <div id="professionProfile"> Profesión: {props.user?.profession} </div>
                    <div id="cityProfile"> Ciudad: {props.user?.city} </div>
                </div>
                <button id="logoutButton" onClick={logout}>Salir</button>
            </div>
        </div>
        
    )

}

const mapStateToProps = ({user}) => ({user: user});
export default connect(mapStateToProps)(Profile);