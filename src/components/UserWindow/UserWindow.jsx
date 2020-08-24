import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/redux/actions';

import './UserWindow.css';

const UserWindow = props =>{
    
    let history = useHistory();

    const userLogout = () => {
        const userId ={
            _id: props.user._id
        }
        logout(userId)
        .then(() => {
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
                    <div id="salutationProfile"> Bienvenido/a {props.user?.name} {props.user?.surnames}</div>
                    <div id="professionProfile"> {props.user?.profession} </div>
                    <div id="cityProfile"> de {props.user?.city} </div>
                </div>
                <button id="logoutButton" onClick={userLogout}>Salir</button>
            </div>
        </div>
        
    )

}

const mapStateToProps = ({user}) => ({user: user});
export default connect(mapStateToProps)(UserWindow);