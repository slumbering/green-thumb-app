import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { itemsReducer } from './dashboard.reducer';

// Merge reducers together
const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  itemsReducer
});

export default rootReducer;