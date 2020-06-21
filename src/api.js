import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ambev-plan.herokuapp.com/'
// baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars'
});

export default api;
