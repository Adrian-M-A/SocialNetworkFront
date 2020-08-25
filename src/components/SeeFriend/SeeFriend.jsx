import React from 'react';

import './SeeFriend.css';


import { connect } from 'react-redux';


const SeeFriend = (props) => {

    return (
        <div id="seeFriendContainer">
            <div id="seeFriend">
                <div id="seeFriendHeader">
                    <div id="borderSeeFriendImage">
                        <img id="seeFriendImg" src={props.friend?.imagesPath[0]} alt="perfil" />
                    </div>
                    <div id="seeFriendData">
                        <h3 id="nameSeeFriend">{props.friend?.name}</h3>
                        <h3 id="surnamesSeeFriend">{props.friend?.surnames}</h3>
                        <h3 id="professionSeeFriend">{props.friend?.profession}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({user}) => ({user: user})
export default connect(mapStateToProps)(SeeFriend);