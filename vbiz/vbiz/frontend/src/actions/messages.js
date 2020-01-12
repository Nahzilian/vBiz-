import { CREATE_MESSAGE } from './types';
// CREATE MESS
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload:msg
    };
};