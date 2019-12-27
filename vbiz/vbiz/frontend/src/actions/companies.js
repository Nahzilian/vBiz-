import axios from 'axios';

import { GET_COMPANIES, DELETE_COMPANIES, ADD_COMPANIES } from './types';

//GET COMPANY

export const getCompanies = () => dispatch => {
    axios.get('api/companies/')
    .then(res => {
        dispatch({
            type: GET_COMPANIES,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}

//DELETE COMPANY

export const deleteCompanies = (id) => dispatch => {
    axios.delete(`api/companies/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_COMPANIES,
            payload: id
        });
    })
    .catch(err => console.log(err));
}

//ADD FORM

export const addCompanies = (company) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/companies/',company)
    .then(res => {
        dispatch({
            type: ADD_COMPANIES,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}