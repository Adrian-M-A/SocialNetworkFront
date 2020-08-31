import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import './ChatWindow.css';
import API_URL from '../../config/api';


const ChatWindow = (props) => {

    let socket = io(API_URL);
    const userName = props.user.name;

    const addMessage = (message) => {
        const messages = document.getElementById('chatMessages');
        const div = document.createElement('div');
        div.setAttribute("class", "chatMessage")
        div.innerHTML = message;
        messages.appendChild(div);
        window.scrollTo(0, document.body.scrollHeight);
    }

    socket.on('user_join', function(data){
        addMessage(data + " acaba de unirse a la sala.")
    })

    socket.on('user_leave', function(data){
        addMessage(data + " acaba de salir de la sala.")
    })

    socket.on('chat_message', function(data){
        addMessage(data.userName + ": " + data.message)
    })

    socket.emit('user_join', userName);
        
    const sendChatMessage = (event) =>{
        event.preventDefault();
        
        addMessage(userName + ': ' + event.target.chatMessage.value);

        socket.emit('chat_message', {
            userName: userName,
            message: event.target.chatMessage.value 
        })
        
        document.getElementById("chatForm").reset();
    }

return (
    <div id="chatContainer">
        <h2 id="chatTitle">Chat</h2>
        <div id="chatMessages"></div>
        <form id="chatForm" action="submit" onSubmit={sendChatMessage}>
            <input name="chatMessage" id="chatMessageArea" cols="30" rows="10"></input>
            <button id="chatMessageButton">Enviar</button>
        </form>
    </div>
)
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(ChatWindow);