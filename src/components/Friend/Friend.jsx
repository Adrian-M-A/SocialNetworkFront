import React from 'react';

import './Friend.css';

import { friendshipRequest, friendDetailData, getUserData } from '../../services/redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Friend = (props) => {

    const history = useHistory();

    const friendDetail = () => {
        friendDetailData(props.friend);
        history.push('/frienddetail');
    }

    const friendhsipRequest = () => {
        const body = {
            requester: props.user?._id,
            receiver: props.friend?._id
        }
        friendshipRequest(body);
        getUserData(props.user._id);
        setTimeout(() => {
            getUserData(props.user._id);
        }, 500);
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