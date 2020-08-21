import React, { useState } from 'react';

import './UsersWindow.css';

import { newFriends, searchedUsers } from '../../services/redux/actions.js';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Friend from '../Friend/Friend.jsx';

const UsersWindow = props => {

    let history = useHistory();
    const [friendsWindow, setFriendsWindow] = useState(true);
    const [searchedFriendsWindow, setSearchedFriendsWindow] = useState(false);

    const goToMessages = () => {
        history.push('/public')
    }

    const getNewFriends = () => {
        
        const country = props.user.country;
        newFriends(country);
    }

    const searchUsers = (event) => {
        event.preventDefault();
        const searchInput =  event.target.searchUsers.value;
        if(!searchInput){
            return;
        }
        searchedUsers(searchInput);
        setFriendsWindow(false);
        setSearchedFriendsWindow(true);
    }

    const filterByUser = (user) => {
        if(user.email !== props.user.email){
            return true;
        }
        return false;
    }

    return (
        <div id="usersWindow">
             <div id="header">
                <button id="buttonLastMessages" onClick={goToMessages}>Mensajes</button>
                <button id="friendsButton" type="submit" onClick={getNewFriends}>Amigos:</button>
                <form id="searchForm" onSubmit={searchUsers}>
                    <input id="searchInputUsers" type="text" name="searchUsers" placeholder="Buscar amigos nuevos..."/>
                    <button id="searchButtonUsers" type="submit">Buscar</button>
                </form>
            </div>
            <div id="messagesContent">
            {friendsWindow && props.newFriends?.filter(filterByUser).map(friend => <Friend key={friend._id} friend={friend} />)}
            {searchedFriendsWindow && props.newFriends?.filter(filterByUser).map(friend => <Friend key={friend._id} friend={friend} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({newFriends: state.newFriends, user: state.user});
export default connect(mapStateToProps)(UsersWindow);