import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import dosCounterReducer from './dosCounter';

export default combineReducers ({
    counterReducer,
    dosCounterReducer
 });

