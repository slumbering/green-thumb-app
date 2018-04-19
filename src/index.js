import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const itemsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            action.payload.id = Date.now();
            const newState = [...state, action.payload];
            return newState;
        case 'EDIT_ITEM':
            const itemID = action.payload.id;
            return state.map(item => {
                if(item.id !== itemID) {
                    return item;
                }

                return action.payload;
            })

            default:
                return state;
    }
}

const store = createStore(
    combineReducers({items: itemsReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));