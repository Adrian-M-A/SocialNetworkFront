import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserDetailWindow.css';

import { updateUser } from '../../services/redux/actions';
import PendingFriend from '../PendingFriend/PendingFriend';

const UserDetailWindow = props => {

    let history = useHistory();

    const [errorUserDetailUpdate, setErrorUserDetailUpdate] = useState('');

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

        let letterRegex = new RegExp('[0-9]');

        if(event.target.userDetailProfession.value.length > 20 || letterRegex.test(event.target.userDetailProfession.value) ||
        event.target.userDetailHobbies.value.length > 20 || letterRegex.test(event.target.userDetailHobbies.value)) {
            setErrorUserDetailUpdate('Con esos datos no se puede actualizar.');
            return;
        }
        
        const body = {
            profession: event.target.userDetailProfession.value || props.user.profession,
            hobbies: event.target.userDetailHobbies.value || props.user.userDetailhobbies,
            imagesPath: event.target.userDetailImagesPath.value || null,

        }
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
                                    <div id="imagePathUserDetail">Imagen de perfil:
                                        <input id="imagePathUserDetailInput" type="text" name="userDetailImagesPath" placeholder="Escribe la dirección de tu imagen" />
                                    </div>
                                </div>
                                <div id="updateAndError">
                                    <button id="userDetailUpdateButton">Actualizar datos</button>
                                    <span id="errorUserDetailUpdate">{errorUserDetailUpdate}</span>
                                </div>
                            </form>
                            <div id="cityUserDetail">Ciudad: <span>{props.user?.city}</span></div>
                            <div id="countryUserDetail">País: <span>{props.user?.country}</span></div>
                        </div>
                    </div>
                </div>
                <div id="userDetailDown">
                    <div id="userDetailPendingFriends"> Invitaciones:
                        {props.user?.pendingFriends.map(friend => <PendingFriend key={friend?._id} friend={friend} />)}
                    </div>
                    <div id="userDetailFriends"> Amigos:
                        {props.user?.friends.map(friend => <PendingFriend key={friend?._id} friend={friend} />)}    
                    </div>
                </div>
            </div>    
        </div>
    )
}
const mapStateToProps = (state) => ({user: state.user});
export default connect (mapStateToProps) (UserDetailWindow);