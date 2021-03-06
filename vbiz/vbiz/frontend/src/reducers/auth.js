import { USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading:false,
    user:null
}

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }
        case LOGIN_FAILED:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:null,
                isLoading:null
            }
        default:
            return state;
    }
}
