import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './features/alertSlice';



export const store = configureStore({
    reducer: {
        alert: alertSlice
    }
});