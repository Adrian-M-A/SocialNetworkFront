import React, {useEffect, useState } from 'react';
import { getAllMessages, searchedMessages, writeMessage, newFriends } from '../../services/redux/actions.js';
import { connect } from 'react-redux';

import './MessagesWindow.css';

import Message from '../Message/Message.jsx';
import { useHistory } from 'react-router-dom';

const MessagesWindow = props => {
    
    let history = useHistory();
    
    useEffect(() => {
        getAllMessages();
       
    },[]);
    
    const [publicWindow, setPublicWindow] = useState(true);
    const [searchWindow, setSearchWindow] = useState(false);

    const goToFriends = () => {
        history.push('/friends');
        newFriends(props.user?.country, props.user?._id);
    }

    const allMessages = () => {
        getAllMessages();
        setSearchWindow(false);
        setPublicWindow(true);
    }

    const goToUserDetail = () => {
        history.push('/userdetail');
    }
    
    const searchMessages = (event) => {
        event.preventDefault();
        const searchInput =  event.target.searchMessage.value;
        if(!searchInput){
            return;
        }
        searchedMessages(searchInput);
        setPublicWindow(false);
        setSearchWindow(true);
    }

    const newMessage = (event) => {
        event.preventDefault();
        const body = {
            header: event.target.writeMessageHeader.value,
            body: event.target.writeMessageBody.value,
            name: props.user.name,
            surnames: props.user.surnames,
            ownerId: props.user._id,
            imagesPath: props.user.imagesPath[0],
            socialGroup: 'public'
        }
        writeMessage(body);
        event.target.writeMessageHeader.value = "";
        event.target.writeMessageBody.value = "";
    }

    return(
        <div id="messagesWindow">
            <div id="headerMessages">
                <div id="headerMessagesLeft">
                    <button id="friendsButton" type="submit" onClick={goToFriends}>Amigos</button>
                    <button id="buttonLastMessages" onClick={allMessages}>Mensajes</button>
                    <button id="buttonUserDetail" onClick={goToUserDetail}>Perfil</button>
                </div>
                <form id="searchForm" onSubmit={searchMessages}>
                    <input id="searchInputMessages" type="text" name="searchMessage" placeholder="Buscar mensaje..."/>
                    <button id="searchButtonMessages" type="submit">Buscar</button>
                </form>
            </div>
            <div id="messagesContent">
            {publicWindow && props.messages?.map(message => <Message key={message._id} message={message} />)}
            {searchWindow && props.messages?.map(message => <Message key={message._id} message={message} />)}
            </div>
            <form id="writeMessage" onSubmit={newMessage}>
                <input id="writeMessageTitle" type="text" name="writeMessageHeader" placeholder="Título del mensaje..."/>
                <input id="writeMessageBody" type="text" name="writeMessageBody" placeholder="Escribe aquí tu mensaje..."/>
                <button id="writeMessagesButton" type="submit">Enviar mensaje</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({messages: state.messages, user: state.user});
export default connect (mapStateToProps)(MessagesWindow);