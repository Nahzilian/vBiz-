import { GET_COMPANIES, DELETE_COMPANIES, ADD_COMPANIES } from "../actions/types.js";

const initialState ={
    companies: []
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_COMPANIES:
            return {
                ...state,
                companies: action.payload
            }
        case DELETE_COMPANIES:
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            }
        case ADD_COMPANIES:
            return{
                ...state,
                companies: [...state.companies, action.payload]
            }

        default:
            return state;
    }
}