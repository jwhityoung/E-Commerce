import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//state object
export default combineReducers({
    user: userReducer
});