import React from 'react';

import './RejectFriend.css';

import { cancelFriendship, getUserData } from '../../services/redux/actions';
import { connect } from 'react-redux';


const RejectFriend = (props) => {

    const rejectFriendship = () => {
        const body = {
            requester: props.user?._id,
            receiver: props.friend?._id
        }
        cancelFriendship(body)
        .then(() =>{
            getUserData(props.user._id);

        })
        .catch(() => ({message: "There was an error trying to cancel friendship"}))
    }

    return (
        <div id="rejectFriendContainer">
            <div id="rejectFriend">
                <div id="rejectFriendHeader">
                    <div id="borderRejectFriendImage">
                        <img id="rejectFriendImg" src={props.friend?.imagesPath[0]} alt="perfil" />
                    </div>
                    <div id="userDataRejectFriend">
                        <h3 id="nameRejectFriend">{props.friend?.name}</h3>
                        <h3 id="surnamesRejectFriend">{props.friend?.surnames}</h3>
                        <h3 id="professionRejectFriend">{props.friend?.profession}</h3>
                    </div>
                </div>
                <div id="rejectFriendContent">
                    <button id="rejectFriendshipRequest" onClick={rejectFriendship}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({user}) => ({user: user})
export default connect(mapStateToProps)(RejectFriend);