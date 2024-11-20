import axios from 'axios';

export const api = axios.create({
    // baseURL: "https://dsm-g06-pi3-2024-2.onrender.com/"
    baseURL: process.env.NEXT_PUBLIC_DB_URL
});