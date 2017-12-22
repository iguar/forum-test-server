import {combineReducers} from 'redux'
import messagesList from './messagesList'

const forumApp = combineReducers({
    messagesList
});

export default forumApp;