import React from 'react';



import './Friend.css';


const Friend = ({friend}) => {
    
    return (
        <div id="friendContainer">
            <div id="friend">
                <div id="friendHeader">
                    <div id="borderFriendImage">
                        <img id="FriendImg" src={friend?.imagesPath[0]} alt="perfil" />
                    </div>
                    <div id="userDataFriend">
                        <h3 id="nameFriend">{friend?.name}</h3>
                        <h3 id="surnamesFriend">{friend?.surnames}</h3>
                        <h3 id="professionFriend">{friend?.profession}</h3>
                    </div>
                </div>
                <div id="messageContent">
                    {/* <div id="messageDate"> {getDate(message.createdAt)}</div>
                    <div id="contentHeader">{message?.header}</div>
                    <div id="messageBody">{message?.body}</div> */}
                </div>
            </div>
        </div>
    )
}


export default Friend;