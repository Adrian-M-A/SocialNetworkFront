import {
LOGIN
} from './types/users.js'

const initialState = {
    user: {}
}

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default reducer;