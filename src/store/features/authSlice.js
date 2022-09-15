import { createSlice } from '@reduxjs/toolkit';
import { loadUser, login, register } from '../../service/authService';
import { storeToStorage } from '../../service/storageService';
import { setAuthToken } from '../../service/utilService';

import { setAlert } from './alertSlice';

const initialState = {
    token: '',
    isAuthenticated: false,
    loading: true,
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess: (state, action) => {
            storeToStorage('token', action.payload);
            state.token = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        registerFail: state => {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.token = null;
            state.loading = false;
        },
        loginSuccess: (state, action) => {
            storeToStorage('token', action.payload.token);
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
        },
        loginFail: state => {
            state.localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.loading = false;
            state.token = null;
        },
        logout: state => {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.token = null;
            state.loading = false;
        },
        userLoaded: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        },
        authError: state => {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.token = null;
            state.loading = false;
        }
    }
});

export const getUserLogin = (email, password) => async dispatch => {
    const res = await login(email, password);

    if (res.type === 'loginSuccess') dispatch(loginSuccess(res.data));
    else dispatch(loginFail());
};

export const getUserAuthenticated = () => async (dispatch) => {
    if (localStorage.token) setAuthToken(localStorage.token);

    try {
        const res = await loadUser();
        if (res.userAuthenticated) {
            dispatch(userLoaded(res.data));
        }
    } catch (err) {
        dispatch(authError());
    }
};

export const getRegisterToken = (registerInfo) => async (dispatch) => {

    const isRegisterThanToken = await register(registerInfo);

    if (isRegisterThanToken.type === 'registerSuccess') dispatch(registerSuccess(isRegisterThanToken.data.token));
    else {
        dispatch(registerFail());
        isRegisterThanToken.errs.forEach(err => {
            dispatch(setAlert(err.msg, 'danger'));
        });
    }
};

export const { registerSuccess, registerFail, authError, userLoaded, loginSuccess, loginFail, logout } = authSlice.actions;

export default authSlice.reducer;