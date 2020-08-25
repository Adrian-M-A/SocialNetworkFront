import React from 'react';

import './FriendDetail.css';

import UserWindow from '../../components/UserWindow/UserWindow';
import FriendDetailWindow from '../../components/FriendDetailWindow/FriendDetailWindow';
import { connect } from 'react-redux';

const FriendDetail = props => {

    return (
        <div id="userDetailContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <FriendDetailWindow />}
        </div>
    )
}
const mapStateToProps = (state) => ({friendDetail: state.friendDetail})
export default connect(mapStateToProps) (FriendDetail);