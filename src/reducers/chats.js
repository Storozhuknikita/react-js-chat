import {
    CHATS_SEND, 
    CHATS_ADD,
    CHATS_LOAD_REQUEST,
    CHATS_LOAD_SUCCESS,
    CHATS_LOAD_FAILTURE,
} from 'actions/chats';
import update from 'react-addons-update';

const initialState = {
    entries: {}, //Chats
    loading: false,
    error: false,
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case CHATS_SEND:
            //ES5
            // return Object.assign({}, {
            //         entries: {
            //             [action.payload.chatId]: {
            //                 messages: state.entries[action.payload.chatId].messages.concat([
            //                     {text: action.payload.text, author: action.payload.author}
            //                 ]),
            //             }
            //         }
            //     });

                //ES6
                // return {
                //     ...state,
                //     entries: {
                //         ...state.entries,
                //         [action.payload.chatId]: {
                //             ...state.entries[action.payload.chatId],
                //             messages: [
                //                 ...state.entries[action.payload.chatId].messages,
                //                 {text: action.payload.text, author: action.payload.author},
                //             ]
                //         }
                //     }
                // };

                //Современный вариант
                return update(state, {
                    entries: {
                        [action.payload.chatId]: {
                            messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                        }
                    }
                });
            case CHATS_ADD:
                const {name, chatId} = action.payload;
                return update(state, {
                    entries: {$merge: {
                        [chatId]: {
                            messages: [],
                            name,
                        }
                    }}
                });
            case CHATS_LOAD_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            case CHATS_LOAD_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    entries: action.payload,
                }
            case CHATS_LOAD_FAILTURE:
                return {
                    ...state,
                    loading: false,
                    error: true,
                }

        default:
            return state;
    }
}