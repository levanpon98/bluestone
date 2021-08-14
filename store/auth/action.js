export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',

    REGISTER: 'REGISTER',
    REGISTER_FAILURE: 'REGISTER_FAILURE',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',

    
};


export function login(payload) {
    return {
        type: actionTypes.LOGIN,
        payload: payload
    };
}

export function logout() {
    return {
        type: actionTypes.LOGOUT,
    };
}

export function loginFailure(error) {
    return {
        type: actionTypes.LOGIN_FAILURE,
        error,
    };
}

export function resetToken(token) {
    return {
        type: actionTypes.RESET_TOKEN,
        token,
    };
}

export function loginSuccess(payload) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload
    };
}

export function logoutSuccess(userData) {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        userData
    };
}

export function register(){
    return {
        type: actionTypes.REGISTER
    }
}

export function registerFailure(error) {
    return {
        type: actionTypes.REGISTER_FAILURE,
        error
    }
}

export function registerSuccess() {
    return {
        type: actionTypes.REGISTER_SUCCESS
    }
}