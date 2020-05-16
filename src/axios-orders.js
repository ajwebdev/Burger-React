import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-crud-b1e67.firebaseio.com/'
});

export default instance;