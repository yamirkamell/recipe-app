import { combineReducers } from 'redux';
import home from './home/reducers';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
