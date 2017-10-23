const defaultState = {

};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'SEND_MESSAGE': 
            return defaultState;
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
