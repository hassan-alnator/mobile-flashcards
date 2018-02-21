import {combineReducers} from 'redux';
import decksReducer from './decksReducer'
import applicationReducer from './applicationReducer'

export default combineReducers({decks: decksReducer, app: applicationReducer})