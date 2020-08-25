import { LOGIN, NEW_FRIENDS, UPDATE_USER, NEW_FRIENDS_DESC, GET_USER_DATA } from './types/users.js'
import { GET_PUBLIC_MESSAGES, SEARCHED_MESSAGES } from './types/messages.js';
import { FRIEND_DETAIL } from './types/friend.js';

const initialState = {
    user: {},
    messages: [],
    newFriends: [],
    newFriendsDesc: [],
    friendDetail: {}
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case GET_USER_DATA:
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
        case FRIEND_DETAIL:
            return {
                ...state,
                friendDetail: action.payload
            }
        default:
            return state;
    }
}

export default reducer;