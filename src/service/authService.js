import axios from 'axios';
import {
    loadFromStorage,
    storeToStorage
} from './storageService.js';

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
        return {
            type: 'registerFail',
            err,
        };
    }

};
export function getRegisterStatus() {
    return {
        token: loadFromStorage('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    };
};