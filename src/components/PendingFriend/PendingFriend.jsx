import React from 'react';

import './PendingFriend.css';

import { acceptRequest, rejectRequest, getUserData } from '../../services/redux/actions';
import { connect } from 'react-redux';


const PendingFriend = (props) => {

    const acceptFriendhsipRequest = () => {
        const body = {
            requester: props.user?._id,
            receiver: props.friend?._id
        }
        acceptRequest(body)
        .then(() =>{
            getUserData(props.user._id);

        })
        .catch(() => ({message: "There was an error trying to accept friendship request."}))
    }

    const rejectFriendhsipRequest = () => {
        const body = {
            requester: props.user?._id,
            receiver: props.friend?._id
        }
        rejectRequest(body)
        .then(() =>{
            getUserData(props.user._id);
        })
        .catch(() => ({message: "There was an error trying to reject friendship request."}))
    }

    return (
        <div id="pendingFriendContainer">
            <div id="pendingFriend">
                <div id="pendingFriendHeader">
                    <div id="borderPendingFriendImage">
                        <img id="PendingFriendImg" src={props.friend?.imagesPath[0]} alt="perfil" />
                    </div>
                    <div id="userDataPendingFriend">
                        <h3 id="namePendingFriend">{props.friend?.name}</h3>
                        <h3 id="surnamesPendingFriend">{props.friend?.surnames}</h3>
                        <h3 id="professionPendingFriend">{props.friend?.profession}</h3>
                    </div>
                </div>
                <div id="PendingFriendContent">
                    <button id="acceptFriendshipRequest" onClick={acceptFriendhsipRequest}>Aceptar</button>
                    <button id="rejectFriendshipRequest" onClick={rejectFriendhsipRequest}>Rechazar</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({user}) => ({user: user})
export default connect(mapStateToProps)(PendingFriend);