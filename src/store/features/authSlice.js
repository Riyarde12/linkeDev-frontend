import { createSlice } from '@reduxjs/toolkit';
// import { loadFromStorage, storeToStorage } from '../../service/authService';
import { register } from '../../service/authService';

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
            localStorage.setItem('token', action.payload);
            state.isAuthenticated = true;
            state.loading = false;
        },
        registerFail: ({ isAuthenticated, token, loading }, { payload }) => {
            localStorage.removeItem('token');
            isAuthenticated = false;
            token = null;
            loading = false;
        },
        // getRegisterToken: async (state, action) => {
        //     console.log('action.payload', action.payload);
        //     console.log('action.payload', action);
        //     // console.log('data', data);
        //     const registerStatus = await register(action.payload);
        //     console.log('registerStatus', registerStatus);
        //     if (registerStatus.type === 'registerSuccess') {
        //         localStorage.setItem('token', registerStatus.data);
        //         state.isAuthenticated = true;
        //         state.loading = false;
        //     } else {
        //         localStorage.removeItem('token');
        //         state.isAuthenticated = false;
        //         state.token = null;
        //         state.loading = false;
        //     }
        // }
    }
});


export const getRegisterToken = (registerInfo) => async (dispatch) => {
    console.log('registerInfo', registerInfo);
    const isRegisterThanToken = await register(registerInfo);
    console.log('ifregisterThanToken', isRegisterThanToken);
    if (isRegisterThanToken.type === 'registerSuccess') dispatch(registerSuccess(isRegisterThanToken.data.token));
    else dispatch(registerFail);
};


export const { registerSuccess, registerFail } = authSlice.actions;

export default authSlice.reducer;