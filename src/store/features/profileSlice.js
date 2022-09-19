import { createSlice } from '@reduxjs/toolkit';
import { getCurrentProfile } from '../../service/profileService';


const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
            state.loading = false;
        },
        profileError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const getUserProfile = () => async (dispatch) => {
    const res = await getCurrentProfile();

    if (res.data) dispatch(setProfile(res.data));
    else dispatch(profileError(res));


};

export const { setProfile, profileError } = profileSlice.actions;
export default profileSlice.reducer;