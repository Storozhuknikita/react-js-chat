export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsAdd = (chatId, name) => ({
    type: CHATS_ADD,
    payload: {chatId, name},
});

//redux-api-middleware
export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST';
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS';
export const CHATS_LOAD_FAILTURE = 'CHATS_LOAD_FAILTURE';

// import {createAction} from 'redux-api-middleware';

// export const chatsLoadApi = () => createAction({
//     endpoint: '/api/chats.json',
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
//     types: [CHATS_LOAD_REQUEST, CHATS_LOAD_SUCCESS, CHATS_LOAD_FAILTURE],
// });

//redux-thunk
export const chatsLoadApiRequest = () => ({
    type: CHATS_LOAD_REQUEST,
});

export const chatsLoadApiSuccess = (data) => ({
    type: CHATS_LOAD_SUCCESS,
    payload: data,
});

export const chatsLoadApiFailture = (error) => ({
    type: CHATS_LOAD_FAILTURE,
    payload: error,
});

export const chatsLoadApi = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadApiRequest());
            const result = (await fetch('/api/chats.json'));
            //const result = (await fetch('http://localhost:5000/chats'));
            dispatch(chatsLoadApiSuccess(await result.json()));
        } catch(error){
            dispatch(chatsLoadApiFailture(error));
        }
    }
};