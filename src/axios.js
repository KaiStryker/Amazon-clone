import axios from 'axios'

const instance = axios.create({
    baseURL: "https://us-central1-clone-fc398.cloudfunctions.net/api" // API (cloud function) url
});

export default instance;