import { combineReducers } from "redux";
import companies from './companies';
import errors from './errors';

import messages from './messages';
import auth from './auth';


export default combineReducers({
    companies,
    errors,
    messages,
    auth
});