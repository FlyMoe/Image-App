import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0kqoVHcSA2jJrliIdu6ctgyD0HWBCHoD8yULREdMArc'
    }
});