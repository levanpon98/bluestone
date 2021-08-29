import {
    all,
    put,
    select,
    takeEvery,
    call
} from 'redux-saga/effects';
import {
    notification
} from 'antd';
import {
    createSelector
} from 'reselect';
import {
    actionTypes,
    loginFailure,
    loginSuccess,
    registerFailure,
    registerSuccess,
    logoutSuccess
} from './action';
import Cookie from 'js-cookie';
import UserRepository from '~/repositories/UserRepository'

const modal = (type, message, description) => {
    notification[type]({
        message: message,
        description: description,
    });
};


function* loginSaga(action) {

    const {
        email,
        password,
        route
    } = action.payload
    try {
        console.log(email)
        console.log(password)
        const res = yield call(UserRepository.login, {
            email,
            password
        });
        const response = res.data.data
        if (res.data.status == 200) {
            Cookie.set('jwt', response.token)
            Cookie.set('userId', response.userId)
            yield put(loginSuccess(response));
            modal('success', "Login Successfully!!!", "Welcome Back!!!")
            route.push('/admin')
        } else {
            yield put(loginFailure('Wrong username/password.'));
            modal('warning', "Login Fail", "Wrong username/password.")
        }
    } catch (err) {
        yield put(loginFailure('Something went wrong.'));
        modal('warning', "Login Fail", "Wrong username/password.")
    }
}


function* registerSaga() {
    yield put(loggingIn(true));
    const email = yield select(selectEmail());
    const password = yield select(selectPassword());

    try {
        const res = yield fetch('http://localhost:1337/api/v1/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (res.ok) {
            yield put(registerSuccess());
        } else {
            yield put(registerFailure());
            modal('warning', "Register Fail", "Email is already used!!!")
        }
    } catch (err) {
        yield put(registerFailure('Something went wrong.'));
    }
}


function* logoutSaga(action) {
    Cookie.remove('jwt');
    Cookie.remove('userId');
    
    yield put(logoutSuccess({}))
}
export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logoutSaga)]);
    yield all([takeEvery(actionTypes.REGISTER, registerSaga)]);
}