import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import './FriendDetailWindow.css';

import SeeFriend from '../SeeFriend/SeeFriend';

const FriendDetailWindow = props => {

    const history = useHistory();

    const getNewFriends = () => {
        history.push('/friends')
    }

    const goToMessages = () => {
        history.push('/main')
    }

    const goToUserDetail = () => {
        history.push('/userdetail')
    }

    return (
        <div id="friendDetailWindow">
            <div id="headerFriendDetail">
                <div id="headerFriendDetailLeft">
                    <button id="friendDetailButton" type="submit" onClick={getNewFriends}>Amigos</button>
                    <button id="buttonLastMessages" onClick={goToMessages}>Mensajes</button>
                    <button id="buttonUserDetail" onClick={goToUserDetail}>Perfil</button>
                </div>
            </div>
            <div id="friendDetailContent">
                <div id="friendDetailUp">
                    <div id="friendDetailLeft">
                        <div id="friendDetailImageBorder">
                            <img id="friendDetailImg" src={props.friendDetail?.imagesPath[0]} alt="Perfil"/>
                        </div>
                        <div id="nameFriendDetail">{props.friendDetail?.name}</div>
                        <div id="surnamesFriendDetail">{props.friendDetail?.surnames}</div>
                        <div id="friendDetailImages">
                            <div id="friendDetailSecondImageBorder">
                                <img id="friendDetailSecondImg" src={props.friendDetail?.imagesPath[1]} alt="Perfil"/>
                            </div>
                            <div id="friendDetailThirdImageBorder">
                                <img id="friendDetailThirdImg" src={props.friendDetail?.imagesPath[2]} alt="Perfil"/>
                            </div>
                        </div>
                    </div>
                    <div id="friendDetailRight">
                        <div id="friendDetailData">
                            <div id="ageFriendDetail">Edad: <span>{props.friendDetail?.age}</span></div>
                            <div id="professionFriendDetail">Profesión: <span>{props.friendDetail?.profession}</span></div>
                            <div id="hobbyFriendDetail">Hobby: <span>{props.friendDetail?.hobbies[0]}</span></div>
                            <div id="cityFriendDetail">Ciudad: <span>{props.friendDetail?.city}</span></div>
                            <div id="countryFriendDetail">País: <span>{props.friendDetail?.country}</span></div>
                        </div>
                    </div>
                </div>
                <div id="friendDetailDown">
                    <div id="friendDetailFriends"> Amigos:
                        <div id="friendDetailListOfFriends">
                            {props.friendDetail?.friends.map(friend => <SeeFriend key={friend?._id} friend={friend} />)}    
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}
const mapStateToProps = (state) => ({friendDetail: state.friendDetail});
export default connect (mapStateToProps) (FriendDetailWindow);