import { getProduct } from '../ducks/products';
import { round } from '../helpers';

var Subtotal = 0;
var IVA = 0;
var Total = 0;

// actions
const CART_ADD = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'MEX'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [...state.items, payload.productId]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getCurrency(state, props) {
    return state.cart.currency;
}

export function getSubtotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        Subtotal = acc + item.price;
        return Subtotal;
    }, 0);
}

export function getIVA(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        IVA = (Subtotal * 0.16).round();
        return IVA;
    }, 0);
}

export function getTotal(state, props) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, { id });
        Total = (Subtotal + IVA).round();
        return Total;
    }, 0);
}