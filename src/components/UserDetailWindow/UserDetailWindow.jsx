import React from 'react';

import './UserDetailWindow.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../services/redux/actions';

const UserDetailWindow = props => {

    let history = useHistory();

    const getNewFriends = () => {
        history.push('/friends')
    }

    const goToMessages = () => {
        history.push('/main')
    }

    const goToUserDetail = () => {
        history.push('/userdetail')
    }

    const updateUserData = (event) => {
        event.preventDefault();
        const body = {
            profession: event.target.userDetailProfession.value || props.user.profession,
            hobbies: event.target.userDetailHobbies.value || props.user.userDetailhobbies,
            imagesPath: event.target.userDetailImagesPath.value || null,

        }
        console.log(body);
        updateUser(props.user._id, body)
    }

    return (
        <div id="userDetailWindow">
            <div id="headerUserDetail">
                <div id="headerUserDetailLeft">
                    <button id="userDetailButton" type="submit" onClick={getNewFriends}>Amigos</button>
                    <button id="buttonLastMessages" onClick={goToMessages}>Mensajes</button>
                    <button id="buttonUserDetail" onClick={goToUserDetail}>Perfil</button>
                </div>
            </div>
            <div id="userDetailContent">
                <div id="userDetailUp">
                    <div id="userDetailLeft">
                        <div id="userDetailImageBorder">
                            <img id="userDetailImg" src={props.user?.imagesPath[0]} alt="Perfil"/>
                        </div>
                        <div id="nameUserDetail">{props.user?.name}</div>
                        <div id="surnamesUserDetail">{props.user?.surnames}</div>
                    </div>
                    <div id="userDetailRight">
                        <div id="userDetailData">
                            <div id="ageUserDetail">Edad: <span>{props.user?.age}</span></div>
                            <form id="userDetailForm" onSubmit={updateUserData}>
                                <div id="updateInputs">
                                    <div id="professionUserDetail">Profesión: 
                                        <input id="professionUserDetailInput" type="text" name="userDetailProfession" placeholder={props.user?.profession} /> 
                                    </div>
                                    <div id="hobbyUserDetail">Hobby:  
                                        <input id="hobbyUserDetailInput" type="text" name="userDetailHobbies" placeholder={props.user?.hobbies[0]} />
                                    </div>
                                    <div id="imagePathUserDetail">Imagen de perfil
                                        <input id="imagePathUserDetailInput" type="text" name="userDetailImagesPath" placeholder="Escribe la dirección de tu imagen" />
                                    </div>
                                </div>
                                <button id="userDetailUpdateButton">Modificar datos</button>
                            </form>
                            <div id="cityUserDetail">Ciudad: <span>{props.user?.city}</span></div>
                            <div id="countryUserDetail">País: <span>{props.user?.country}</span></div>
                        </div>
                    </div>
                </div>
                <div id="userDetailDown">
                </div>
            </div>    
        </div>
    )
}
const mapStateToProps = (state) => ({user: state.user});
export default connect (mapStateToProps) (UserDetailWindow);