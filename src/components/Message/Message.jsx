import React from 'react';
import moment from 'moment';


import './Message.css';


const Message = ({message}) => {
    
    const getDate = (date) => {
        
        let m = moment(date);
        return m.format('h:mm:ss a DD/MM/yyyy');
   };


    return (
        <div id="messageContainer">
            <div id="message">
                <div id="messageHeader">
                    <div id="borderMessageImage">
                        <img id="messageImg" src={message?.imagesPath[0]} alt="perfil" />
                    </div>
                    <div id="userDataMessage">
                        <h4 id="nameMessage">{message?.name}</h4>
                        <h4 id="surnamesMessage">{message?.surnames}</h4>
                    </div>
                </div>
                <div id="messageContent">
                    <div id="messageDate"> {getDate(message.createdAt)}</div>
                    <div id="contentHeader">{message?.header}</div>
                    <div id="messageBody">{message?.body}</div>
                </div>
            </div>
        </div>
    )
}


export default Message;