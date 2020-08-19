import axios from 'axios';
import store from './store.js';
import backURL from '../../config/api.js';
import { LOGIN } from './types/users.js';

export const login = async(credentials) => {
    const res = await axios.post(backURL + 'users/login', credentials);
    store.dispatch({
        type: LOGIN,
        payload: res.data.user
    });
    localStorage.setItem('authToken', res.data.token);
    return res;
}

