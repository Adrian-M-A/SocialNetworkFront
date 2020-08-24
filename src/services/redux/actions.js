import axios from 'axios';
import store from './store.js';
import backURL from '../../config/api.js';
import { LOGIN, NEW_FRIENDS, UPDATE_USER } from './types/users.js';
import { GET_PUBLIC_MESSAGES, SEARCHED_MESSAGES } from './types/messages.js';

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

export const searchedMessages = async(searchInput) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'messages/search/' + searchInput, {
        headers: {
            'authorization': token
        },
        id:token
    });
    store.dispatch({
        type: SEARCHED_MESSAGES,
        payload: res.data
    })
    return res;
}

export const writeMessage = async(body) => {
    const token = localStorage.getItem('authToken');
    await axios.post(backURL + 'messages/new', body, {
        headers: {
            'authorization': token
        },
        id:token
    });
    
}

export const newFriends = async(country) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/newfriends/' + country, {
        headers: {
            'authorization': token
        },
        id:token
    });
    store.dispatch({
        type: NEW_FRIENDS,
        payload: res.data
    })
    return res;
}

export const searchedUsers = async(tag) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/search/' + tag, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: NEW_FRIENDS,
        payload: res.data
    })
    return res;
}

export const friendshipRequest = async(body) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.post(backURL + 'users/friendshiprequest' , body, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: NEW_FRIENDS,
        payload: res.data
    })
}

export const friendsByAge = async(minAge, maxAge) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/age/' + minAge + '/' + maxAge, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: NEW_FRIENDS,
        payload: res.data
    })
}

export const updateUser = async(id,body) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.put(backURL + 'users/' + id, body, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: UPDATE_USER,
        payload: res.data
    })
}