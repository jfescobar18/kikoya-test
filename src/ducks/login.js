// actions
const LOGIN = 'cart/LOGIN';
const LOGOUT = 'cart/LOGOUT';

// reducer
const initialState = {
    id: 0,
    username: '',
    role: '',
    permissions: [],
    token: ''
};

export default function login(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN:
            return handleLogin(state, action.payload);
        case LOGOUT:
            return handleLogout(state, action.payload);
        default:
            return state;
    }
};

function handleLogin(state, payload) {
    return payload.user;
}

function handleLogout(state, payload) {
    return {
        ...state,
        users: state.items.filter(id => id !== payload.id)
    };
}

// action creators
export function loginRequest(user) {
    return {
        type: LOGIN,
        payload: {
            user
        }
    };
}

export function logoutRequest(id) {
    return {
        type: LOGOUT,
        payload: {
            id
        }
    }
}

// selectors
export function getId(state, props) {
    return state.id;
}

export function getUsername(state, props) {
    return state.username;
}

export function getRole(state, props) {
    return state.role;
}

export function getPermissions(state, props) {
    return state.permissions;
}

export function getToken(state, props) {
    return state.token;
}