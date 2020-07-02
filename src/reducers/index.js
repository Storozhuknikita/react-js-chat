import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {chatsReducer} from './chats';

// export const rootReducer = combineReducers({
//     chats: chatsReducer,
//     //profile: //TODO
// });

//Lesson6
export const initReducer = history => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
});