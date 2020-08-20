import React from 'react';

import './Message.css';


const Message = ({message}) => {

    return (
        <div id="messageContainer">
            <div id="message">
                <div id="messageHeader">
                    <div id="borderMessageImage">
                        <img id="messageImg" src={message?.imagesPath[0]} alt="perfil" />
                    </div>
                    <div id="userDataMessage">
                        <h4 id="nameMessage">{message?.name}</h4>
                        <h4 id="suramesMessage">{message?.surnames}</h4>
                    </div>
                </div>
                <div id="messageContent">
                    <div id="headerContent">{message?.header}</div>
                    <div id="bodyMessage">{message?.body}</div>
                </div>
            </div>
        </div>
    )
}


export default Message;