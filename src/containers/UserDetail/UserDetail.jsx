import React from 'react';

import './UserDetail.css';

import UserWindow from '../../components/UserWindow/UserWindow';
import UserDetailWindow from '../../components/UserDetailWindow/UserDetailWindow';
import { getUserData } from '../../services/redux/actions';
import { connect } from 'react-redux';

const UserDetail = props => {

    getUserData(props.user._id);

    return (
        <div id="userDetailContainer">
            {localStorage.getItem('authToken') && <UserWindow />}
            {localStorage.getItem('authToken') && <UserDetailWindow />}
        </div>
    )
}
const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps) (UserDetail);