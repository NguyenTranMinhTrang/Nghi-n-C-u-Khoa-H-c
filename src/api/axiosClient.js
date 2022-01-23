import axios from 'axios';
import queryString from 'query-string';
import { and } from 'react-native-reanimated';

const axiosClient = axios.create({
    baseURL: 'http://192.168.1.14:3000/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params),
});

/* axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
}); */

/* axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;

}, (error) => {
    throw error;
}); */

export default axiosClient;