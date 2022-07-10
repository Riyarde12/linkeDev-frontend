import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: [],
    reducers: {
        setAlert: (state, { payload }) => {
            state.push(payload);
        },
        removeAlert: (state, { payload }) => {
            return state.filter(alert => alert.id !== payload);
        }
    }
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
