import axios from 'axios'

const instance = axios.create({
    baseURL: "..." // API (cloud function) url
});

export default instance;