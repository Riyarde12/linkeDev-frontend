import axios from 'axios';
import {
    loadFromStorage,
} from './storageService.js';

// Register user
export async function register({ name, email, password }) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/user', body, config);
        return {
            type: 'registerSuccess',
            data: res.data
        };
    }
    catch (err) {
        console.error(err);
        const errors = err.response.data.errors;
        return {
            type: 'registerFail',
            errs: errors
        };
    }

};

// Login user
export async function login(email, password) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);
        return {
            type: 'loginSuccess',
            data: res.data
        };
    }
    catch (err) {
        console.error(err);
        const errors = err.response.data.errors;
        return {
            type: 'loginFail',
            errs: errors
        };
    }

};

export async function loadUser() {
    // if (localStorage.token) {
    //     setAuthToken(localStorage.token);
    // }
    try {
        const res = await axios.get('/api/auth');
        return {
            userAuthenticated: true,
            data: res.data
        };
    } catch (err) {
        console.log('err', err);
        return {
            type: 'userAuthenticatedFailed',
            errs: err.response.data.errors
        };
    }
}

export function getRegisterStatus() {
    return {
        token: loadFromStorage('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    };
};