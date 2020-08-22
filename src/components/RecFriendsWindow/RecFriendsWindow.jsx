import React, { useState } from 'react';

import './RecFriendsWindow.css';

import { newFriends, searchedUsers, friendsByAge, friendsByAgeDesc } from '../../services/redux/actions.js';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Friend from '../Friend/Friend.jsx';

const RecFriendsWindow = props => {

    let history = useHistory();
    const [friendsWindow, setFriendsWindow] = useState(true);
    const [searchedFriendsWindow, setSearchedFriendsWindow] = useState(false);
    const [ageFriendsDescWindow, setAgeFriendsDescWindow] = useState(false);

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
        setAgeFriendsDescWindow(false);
        setSearchedFriendsWindow(true);
    }

    const filterByUser = (user) => {
        if(user.email !== props.user.email){
            return true;
        }
        return false;
    }

    const getByAge = (event) => {
        event.preventDefault();
        const minAgeInput =  event.target.minAge.value;
        const maxAgeInput =  event.target.maxAge.value;
        
        if(!minAgeInput || !maxAgeInput){
            return;
        }
        friendsByAge(minAgeInput, maxAgeInput)
        setFriendsWindow(false);
        setAgeFriendsDescWindow(false);
        setSearchedFriendsWindow(true);
    }

    const orderAgeDesc = (a,b) =>{
        return b - a;
    }

    const getByAgeDesc = () => {
        setFriendsWindow(false);
        setSearchedFriendsWindow(false);
        setAgeFriendsDescWindow(true);
    }

    return (
        <div id="friendsWindow">
             <div id="headerFriends">
                <div id="headerFriendsLeft">
                    <button id="friendsButton" type="submit" onClick={getNewFriends}>Amigos</button>
                    <button id="buttonLastMessages" onClick={goToMessages}>Mensajes</button>
                </div>
                <form id="searchForm" onSubmit={searchUsers}>
                    <input id="searchInputUsers" type="text" name="searchUsers" placeholder="Buscar amigos nuevos..."/>
                    <button id="searchButtonUsers" type="submit">Buscar</button>
                </form>
            </div>
            <div id="friendsByAge">
                <h3 id="friendsByAgeLabel">Buscar amigos por edad</h3>
                <div id="formAndButtonsRow">
                    <form id="searchAgeForm" onSubmit={getByAge}>
                        <input id="minAge" type="text" name="minAge" placeholder="Edad mínima"/>
                        <input id="maxAge" type="text" name="maxAge" placeholder="Edad máxima"/>
                        <button id="searchAgeButton">Buscar</button>
                    </form>
                        <button id="descendingAgeButton" onClick={getByAgeDesc}>Ordenar descendentemente</button>
                </div>
            </div>
            <div id="friendsContent">
                <div id="recommendedFriends">
                    <h3 id="recommendedFriendsLabel">Sugerencias de amigos:</h3>
                    <div id="friendsComponents">
                        {friendsWindow && props.newFriends?.filter(filterByUser).map(friend => <Friend key={friend._id} friend={friend} />)}
                        {searchedFriendsWindow && props.newFriends?.filter(filterByUser).map(friend => <Friend key={friend._id} friend={friend} />)}
                        {ageFriendsDescWindow && props.newFriends?.filter(filterByUser).sort(orderAgeDesc).map(friend => <Friend key={friend._id} friend={friend} />)}
                    </div>
                </div>
           </div>
        </div>
    )
}

const mapStateToProps = (state) => ({newFriends: state.newFriends, user: state.user});
export default connect(mapStateToProps)(RecFriendsWindow);