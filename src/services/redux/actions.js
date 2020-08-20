import axios from 'axios';
import store from './store.js';
import backURL from '../../config/api.js';
import { LOGIN } from './types/users.js';
import { GET_PUBLIC_MESSAGES } from './types/messages.js';

export const login = async(credentials) => {
    const res = await axios.post(backURL + 'users/login', credentials);
    store.dispatch({
        type: LOGIN,
        payload: res.data.user
    });
    localStorage.setItem('authToken', res.data.token);
    return res;
}

export const logout = async(id) => {
    const token = localStorage.getItem('authToken');
    await axios.get(backURL + 'users/logout', {
        headers: {
            'authorization': token
        },
        id:token
    });
    localStorage.removeItem('authToken');
}

export const getAllMessages = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'messages/public', {
        headers: {
            'authorization': token
        },
        id:token
    });
    store.dispatch({
        type: GET_PUBLIC_MESSAGES,
        payload: res.data
    })
    return res;
}
