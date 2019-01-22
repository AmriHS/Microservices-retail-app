import { combineReducers } from 'redux';

import { authentication } from './authReducer';
import { registration } from './registerReducer';
import { user } from './userReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  user
});

export default rootReducer;
