import { LOGIN } from './types/users.js'
import { GET_PUBLIC_MESSAGES } from './types/messages.js';

const initialState = {
    user: {},
    publicMessages: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user:action.payload
            }
        case GET_PUBLIC_MESSAGES:
            return {
                ...state,
                publicMessages:action.payload
            }
        default:
            return state;
    }
}

export default reducer;