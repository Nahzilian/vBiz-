import axios from 'axios';

import { GET_COMPANIES } from './types';

//GET LEADS

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