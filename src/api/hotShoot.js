import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/api';

const hotShootApi = axios.create({
    baseURL: `${BASE_URL}/hotShoot/`,
    headers: { 'Content-Type': 'application/json' },
});

export const getHotShootPromotion = async () => {
    try {
        const response = await hotShootApi.get('/get');
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};

export const changeHotShootPromotion = async () => {
    try {
        const response = await hotShootApi.get('/timerchange');
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};
