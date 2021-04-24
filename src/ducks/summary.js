// reducer
export default function summary(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getCart(state, props) {
    return state.cart;
}
