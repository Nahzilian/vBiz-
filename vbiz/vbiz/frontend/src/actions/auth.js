import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS} from './types'

//CHECK TOKEN AND LOAD USER

export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type:USER_LOADING });
    //Get token from state
    const token = getState().auth.token;
    //Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    //if token, add to headers config

    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user',config)
        .then(res => {
            dispatch(
                {
                    type: USER_LOADED,
                    payload: res.data
                }
            );
        }).catch( err => {
            dispatch(returnErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: AUTH_ERROR
            });
        }

        )
}


//LOGIN user

export const login = (username, password) => (dispatch) => {
        //Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    };
    //request body
    const body = JSON.stringify({username, password});

    axios.post('/api/auth/login',body,config)
        .then(res => {
            dispatch(
                {
                    type: LOGIN_SUCCESS,
                    payload: res.data
                }
            );
        }).catch( err => {
            dispatch(returnErrors(
                err.response.data,err.response.status
            ));
            dispatch({
                type: LOGIN_FAILED
            });
        }

        )
}


//register

export const register = ({ username,password,email}) => (dispatch) => {
    //Headers
const config = {
    headers:{
        'Content-Type':'application/json'
    }
};
//request body
const body = JSON.stringify({username,email,password});

axios.post('/api/auth/login',body,config)
    .then(res => {
        dispatch(
            {
                type: LOGIN_SUCCESS,
                payload: res.data
            }
        );
    }).catch( err => {
        dispatch(returnErrors(
            err.response.data,err.response.status
        ));
        dispatch({
            type: LOGIN_FAILED
        });
    }

    )
}


//logout


export const logout = () => (dispatch, getState) => {
    //Get token from state
    const token = getState().auth.token;
    //Headers
    const config = {
        headers:{
            'Content-Type':'application/json'
            
        }
    }

    //if token, add to headers config

    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.post('/api/auth/logout/',null,config)
        .then(res => {
            dispatch(
                {
                    type: LOGOUT_SUCCESS,
                }
            );
        }).catch( err => {
            dispatch(returnErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: AUTH_ERROR
            });
        }

        )
}


