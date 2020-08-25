import axios from 'axios';
import store from './store.js';
import backURL from '../../config/api.js';
import { LOGIN, NEW_FRIENDS, UPDATE_USER, NEW_FRIENDS_DESC, GET_USER_DATA } from './types/users.js';
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

export const getUserData = async(id) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/data/' + id, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: GET_USER_DATA,
        payload: res.data
    });
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

export const newFriends = async(country, id) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/newfriends/' + country + '/' + id, {
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
    await axios.post(backURL + 'users/friendshiprequest' , body, {
        headers: {
            'authorization': token
        }
    });
}

export const friendsByAge = async(minAge, maxAge, id) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/age/' + minAge + '/' + maxAge + '/' + id, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: NEW_FRIENDS,
        payload: res.data
    })
}

export const friendsByAgeDesc = async(minAge, maxAge, id) => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get(backURL + 'users/age/desc/' + minAge + '/' + maxAge + '/' + id, {
        headers: {
            'authorization': token
        }
    });
    store.dispatch({
        type: NEW_FRIENDS_DESC,
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

export const acceptRequest = async(body) => {
    const token = localStorage.getItem('authToken');
    await axios.post(backURL + 'users/acceptrequest', body, {
        headers: {
            'authorization': token
        }
    });
}

export const rejectRequest = async(body) => {
    const token = localStorage.getItem('authToken');
    await axios.post(backURL + 'users/rejectrequest', body, {
        headers: {
            'authorization': token
        }
    });
}

export const cancelFriendship = async(body) => {
    const token = localStorage.getItem('authToken');
    await axios.post(backURL + 'users/cancelfriendship', body, {
        headers: {
            'authorization': token
        }
    });
}