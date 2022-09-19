import axios from 'axios';

export async function getCurrentProfile() {
    try {
        const res = await axios.get('/api/profile/me');

        return {
            data: res.data
        };
    } catch (err) {
        console.error(err);
        console.log('Cannot get profile', err);
        return {
            msg: err.response.statusText,
            status: err.response.status
        };
    }
}