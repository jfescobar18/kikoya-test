import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './ducks/cart';
import productsReducer from './ducks/products';
import loginReducer from './ducks/login';
import navbarReducer from './ducks/navbar';
import App from './App';
import productsData from './data/products';
import { configureFakeBackend } from './helpers';
import 'bootstrap/dist/css/bootstrap.css';

configureFakeBackend();

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    user: loginReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData, // initial store values
        user: JSON.parse(sessionStorage.getItem('session')) || {
            id: 0,
            username: '',
            role: '',
            permissions: [],
            token: ''
        }
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
