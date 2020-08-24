import { LOGIN, NEW_FRIENDS, UPDATE_USER, NEW_FRIENDS_DESC } from './types/users.js'
import { GET_PUBLIC_MESSAGES, SEARCHED_MESSAGES } from './types/messages.js';

const initialState = {
    user: {},
    messages: [],
    newFriends: [],
    newFriendsDesc: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case GET_PUBLIC_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case SEARCHED_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case NEW_FRIENDS:
            return {
                ...state,
                newFriends: action.payload
            }
        case NEW_FRIENDS_DESC:
        return {
            ...state,
            newFriendsDesc: action.payload
        }
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer;