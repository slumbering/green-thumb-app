import { combineReducers } from 'redux';

import plantsList from './dashboard.reducer';
import authentication from './authentication.reducer';
import signup from './signup.reducer';
import { reducer as formReducer } from 'redux-form';

// Merge reducers together
const rootReducer = combineReducers({
  plantsList,
  authentication,
  signup,
  form: formReducer
});

export default rootReducer;