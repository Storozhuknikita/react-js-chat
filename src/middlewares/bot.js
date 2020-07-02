import {CHATS_SEND, chatsSend} from 'actions/chats';

export function botMiddteware(store){
    return function dispatchWrap(next){
        return function dispatchLog(action){
            if(action.type === CHATS_SEND){
                const {chatId, author} = action.payload;

                if(author !== 'Bot'){
                    setTimeout(() => {
                        store.dispatch(chatsSend({chatId, author: 'Bot', text: `Привет, ${author}! Это бот...`}));
                    }, 3000);
                }
            }

            return next(action);
        }
    }
}