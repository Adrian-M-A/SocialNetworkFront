import React from 'react';

import './FriendDetail.css';

import UserWindow from '../../components/UserWindow/UserWindow';
import FriendDetailWindow from '../../components/FriendDetailWindow/FriendDetailWindow';
import { connect } from 'react-redux';
import ChatWindow from '../../components/ChatWindow/ChatWindow';

const FriendDetail = props => {

    return (
        <div id="userDetailContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <FriendDetailWindow />}
            {localStorage.getItem('authToken') && <ChatWindow />}
        </div>
    )
}
const mapStateToProps = (state) => ({friendDetail: state.friendDetail})
export default connect(mapStateToProps) (FriendDetail);