// reducer
export default function navbar(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getUser(state, props) {
    return state.user;
}
