import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3266c.firebaseio.com/'
});

export default instance;