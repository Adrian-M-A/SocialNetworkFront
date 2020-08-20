import React, {useEffect} from 'react';
import { getAllMessages } from '../../services/redux/actions.js';
import { connect } from 'react-redux';

import './MessagesWindow.css';

import Message from '../Message/Message.jsx';

const MessagesWindow = props => {
    
    useEffect(() => {
        getAllMessages();
    },[]);

    return(
        <div id="messagesWindow">
            <div id="header">
                <label id="labelMessages">Mensajes:</label>
                <input id="searchInputMessages" type="text" name="search" placeholder="Buscar mensaje..."/>
                <button id="searchButtonMessages" type="submit">Buscar</button>
            </div>
            <div id="messagesContent">
            {props.publicMessages?.map(message => <Message key={message._id} message={message} />)}
            </div>
        </div>
    )
}
const mapStateToProps = ({publicMessages}) => ({publicMessages: publicMessages});
export default connect (mapStateToProps)(MessagesWindow);