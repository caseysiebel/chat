const defaultState = {
    messages: [],
    username: ''
};

function reducer(state = defaultState, action) {
    console.log('state', state);
    switch (action.type) {
        case 'LOG_IN':
            const username = action.payload;
            return { ...state, username };

        case 'MESSAGE_RECEIVED': 
            const receivedMessage = action.payload;
            const newMessages = state.messages.concat([ receivedMessage ]);
            return { ...state, messages: newMessages };
        default:
            return defaultState;
    }
}

import { createStore } from 'redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
