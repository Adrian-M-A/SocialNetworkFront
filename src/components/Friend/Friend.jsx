import React from 'react';

import './Friend.css';

import { friendshipRequest } from '../../services/redux/actions';
import { connect } from 'react-redux';

const Friend = (props) => {

    const friendDetail = () => {
        console.log(props.friend);
    }

    const friendhsipRequest = () => {
        const body = {
            requester: props.user?._id,
            receiver: props.friend?._id
        }
        friendshipRequest(body);
    }

    return (
        <div id="friendContainer">
            <div id="friend">
                <div id="friendHeader">
                    <div id="borderFriendImage">
                        <img id="friendImg" src={props.friend?.imagesPath[0]} alt="perfil" onClick={friendDetail} />
                    </div>
                    <div id="userDataFriend">
                        <h3 id="nameFriend">{props.friend?.name}</h3>
                        <h3 id="surnamesFriend">{props.friend?.surnames}</h3>
                        <h3 id="professionFriend">{props.friend?.profession}</h3>
                    </div>
                </div>
                <div id="friendContent">
                    <button id="friendshipRequest" onClick={friendhsipRequest}>Ser su amigo</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({user}) => ({user: user})
export default connect(mapStateToProps)(Friend);